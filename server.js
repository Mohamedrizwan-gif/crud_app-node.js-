const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080;
const connectDB = require('./server/database/connection');

app.use(morgan('tiny'))
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.set('view engine', 'ejs')
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')))
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.use('/', require('./server/routes/router'))

app.listen(PORT, () =>  {
    console.log('localhost:' + PORT);
    connectDB();
})