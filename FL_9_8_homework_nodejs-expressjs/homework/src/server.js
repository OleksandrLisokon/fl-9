const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

app.use('/car', router);

app.listen(port, (err) => {
  if (err) return console.error('something bad happened', err)

  console.log(`server is listening on ${port}`)
})


