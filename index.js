const express = require('express')
const app = express()

app.use(express.json())

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "999999999"
    },
    {
        id: 2,
        name: "Alan Turing",
        number: "999999999"
    }
  ]

  app.get('/info', (req, res) => {
    res
        .set('Content-Type', 'text/html')
        .status(200).header('')
        .send(`<p>Phonebook has info for ${persons.length}people</p> <p>${new Date()}</p>`)
  })

  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

  app.get('/api/persons/:id', (req, res) => {
    const personId = Number(req.params.id)
    const person = persons.find(personI => personI.id === personId)
    if(person){
        res.json(person)
    }else{
        res.status(404).end()
    }
  })
  
  const randomBetween = (low, high) => {
    return Math.floor(Math.random() * (high - low) + low)
  }

  app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name || !body.number) {
        return response.status(400).json({error: 'name or number are missing'})
    }
    if (persons.find(personI => personI.name === body.name)) {
        return response.status(500).json({error: 'name must be unique'})
    }
    //const maxId = persons.reduce((acc,personI) => acc = Math.max(acc, personI.id), 0)
    const maxId = randomBetween(1, 1000000000)
    const newPerson = {
        id: maxId + 1,
        number: body.number,
        name: body.name
    }
    persons = persons.concat(newPerson)
    response.status(201).json(newPerson)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const personId = Number(request.params.id)
    persons = persons.filter(personI => personI.id !== personId)
    response.status(204).end()
  })

  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
