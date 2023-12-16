const express = require('express')
const app = express();
const path = require('path')

const createPath = () => path.resolve(__dirname, 'views',`${page}.html`)

    //http://localhost:3000/
app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
});

app.get('/cotacts', (req, res) => {
    res.sendFile(createPath('contacts'))
})

app.get('/about-us', () => {
    res.redirect('/contacts')
})

app.use(() => {
    res.status(404),res.sendFile(createPath("error"))
})



const host = "localhost"
const port = 3000
app.listen(port, (error) => {
    error
    ? console.log(error)
    : console.log(` Server is running at http://${host}:${port} `);
 })