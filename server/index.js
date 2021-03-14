const express = require('express')
const app = express()
app.use(express.json())

const { getUser, updateUser } = require('./controllers/users')

app.get('/api/user', getUser)

app.put('/api/user', updateUser)

app.listen(3001, () => console.log('Listening with all my heart!'))
