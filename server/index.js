const express = require('express')
const app = express()
app.use(express.json())

const { getUser, updateUser } = require('./controllers/users')
const { getCat } = require('./controllers/cats')

app.get('/api/user', getUser)
app.put('/api/user', updateUser)

app.get('/api/cats', getCat)

app.listen(3001, () => console.log('Listening with all my heart!'))
