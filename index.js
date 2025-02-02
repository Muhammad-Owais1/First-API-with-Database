import express from "express"
import router from './routes/index.js'
import mongoose from "./db/index.js"

const app = express()
const port = 3000

app.use(express.json())



mongoose.connection.on('open' , () => {
  console.log('Database connected')
})

mongoose.connection.on('error', () => {
  console.log('Database error')
  process.exit(1)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
}) 


app.use('/api', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
