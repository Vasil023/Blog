const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const morgan = require('morgan')


const app = express()
app.use(morgan("dev"));
app.use(express.json( {extended: true} ))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/post', require('./routes/post.routes'))

const PORT = config.get('port') || 5000
async function start () {
  try {
    await mongoose.connect(config.get('mongoUrl'), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
   })
   app.listen(PORT, () => console.log(`App satrted ${PORT}`))
  } catch(e) {
    console.log('Server error', e.message)
    process.exit(1)
  }
}
start()


