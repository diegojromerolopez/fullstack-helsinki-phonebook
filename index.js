require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.static('build'))
app.use(cors())

morgan.token('body', (req, res) => JSON.stringify(req.body) );
app.use(morgan(':method :url :status :response-time ms - :res[content-length] :body - :req[content-length]'))

const Person = require('./models/person')

  
app.get('/info', (req, res) => {
    Person.countDocuments().then((count) => {
        res
        .set('Content-Type', 'text/html')
        .status(200).header('')
        .send(`<p>Phonebook has info for ${count} people</p> <p>${new Date()}</p>`)
    })
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons.map(person => person.toJSON()))
      })
})

app.get('/api/persons/:id', (req, res) => {
    const personId = req.params.id
    Person.findById(personId).then(person => {
        res.json(person.toJSON())
    })
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({error: 'name or number are missing'})
    }
    const newPerson = new Person({name: body.name, number: body.number})
    newPerson.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const personId = request.params.id
    Person.findByIdAndRemove(personId).then(()=>{
        response.status(204).end()
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
