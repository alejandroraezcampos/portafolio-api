const express = require('express')
const app = express()
const config = require('./config')
const routes_about = require('./controllers/about')

app.use(routes_about)
app.listen(config.port, () => {
    console.log('Servidor API corriendo en el puerto 3000')})