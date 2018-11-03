const express = require('express')
const app = express()
const port = 3000

app.use(express.static('css')) // this is needed so for the css file to be recognized
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))