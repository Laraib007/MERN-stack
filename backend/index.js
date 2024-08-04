const connectToMongoose = require("./db");
const express = require('express')

connectToMongoose()

const app = express()
const port = 3000


// API Routes
app.use("/auth/users", require("./routes/users"))
app.use("/auth/notes", require("./routes/notes"))

app.get('/', (req, res) => {
  res.send('Hello Labi!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})