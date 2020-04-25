require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.static('build'))
//    app.use(express.static('frontend/build'))
app.use(cors())

morgan.token('body', (req, res) => JSON.stringify(req.body) );
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'))

const Person = require('./models/person')

const ALLOW_PERSON_UPDATE_FROM_POST = process.env.ALLOW_PERSON_UPDATE_FROM_POST === "true"

// Get phonebook info
app.get('/info', (req, res) => {
    Person.countDocuments().then((count) => {
        res
        .set('Content-Type', 'text/html')
        .status(200).header('')
        .send(`<p>Phonebook has info for ${count} people</p> <p>${new Date()}</p>`)
    })
})

// Get all persons
app.get('/api/persons', (req, res, next) => {
    Person.find({})
    .then(persons => {
        res.json(persons.map(person => person.toJSON()))
    })
    .catch(error => next(error))
})

// Get a person in database
app.get('/api/persons/:id', (req, res, next) => {
    const personId = req.params.id
    Person.findById(personId)
    .then(person => {
      if (person) {
        res.json(person.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

// Add a new person
app.post('/api/persons', (req, res, next) => {
    const body = req.body
    const name = body.name
    const number = body.number
    if (!name || !number) {
        return res.status(400)
                  .json({error: 'name or number are missing'})
    }

    if(ALLOW_PERSON_UPDATE_FROM_POST){
        // Check if the name exists, if that's the case, update
        // that person's phone number
        Person.findOne({name}).then(person =>{
            if(person){
                Person.findByIdAndUpdate(person._id, {number}, { new: true })
                .then(updatedPerson => {
                    res.json(updatedPerson.toJSON())
                })
                .catch(error => next(error))
            }else{
                const newPerson = new Person({name, number})
                newPerson.save()
                .then(savedPerson => {
                    res.json(savedPerson.toJSON())
                })
                .catch(error => next(error))
            }
        })
        .catch(error => next(error))
    }else{
        const newPerson = new Person({name, number})
        newPerson.save()
        .then(savedPerson => {
            res.json(savedPerson.toJSON())
        })
        .catch(error => next(error))
    }
})

// Update a new person
app.put('/api/persons/:id', (req, res, next) => {
    const body = req.body
    const personId = req.params.id

    const person = {
      name: body.name,
      number: body.number,
    }
  
    Person.findByIdAndUpdate(personId, person, { new: true })
      .then(updatedPerson => {
        res.json(updatedPerson.toJSON())
      })
      .catch(error => next(error))
  })

// Delete a new person
app.delete('/api/persons/:id', (req, res, next) => {
    const personId = req.params.id
    Person.findByIdAndRemove(personId)
    .then(result => {
        if(result){
            res.status(204).end()
        }else{
            res.status(404).end()
        }
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' }).end()
  }
  
  // handler of requests with unknown endpoint
  app.use(unknownEndpoint)
  
  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' }).end()
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
  }
  
  // handler of requests with result to errors
  app.use(errorHandler)