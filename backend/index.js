const connectToMongoose = require("./db");
const express = require('express')

connectToMongoose()

const app = express()
const port = 5000

app.use(express.json())

// API Routes
app.use("/api/auth", require("./routes/auth"))
app.use("/api/notes", require("./routes/notes"))

app.get('/', (req, res) => {
  res.send('Hello Labi!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})