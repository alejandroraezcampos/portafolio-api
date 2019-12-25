const express = require('express')
const app = express()

app.get('/about', (req, res) => {
    res.status(200).send({message: 'Sobre mi...'})
    console.log('Sobre mi...')
})

app.get('/about/qualities', (req, res) => {
    res.status(200).send({message: 'cualidades personales...'})
    console.log('cualidades personales...')
})

app.get('/about/career', (req, res) => {
    res.status(200).send({message: 'Experiencia profesional...'})
    console.log('Experiencia profesional...')
})

app.get('/about/estudies', (req, res) => {
    res.status(200).send({message: 'Estudios..'})
    console.log('Cualidades personales...')
})

app.get('/about/skills', (req, res) => {
    res.status(200).send({message: 'Habilidades personales...'})
    console.log('Habilidades personales')
})

module.exports = app