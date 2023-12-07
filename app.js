const express = require('express')
const app = express()
const port = 8080

app.get('/',  (req, res) => {
  res.send('Home')
})
app.get('/hello-world',  (req, res) => {
    res.send('Hello World')
  })
  app.get('*',  (req, res) => {
    res.send('Page| not found')
  })
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })