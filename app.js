const express = require('express')
const authRoutes = require('./routes/authRoutes')
const adminRoutes = require('./routes/adminRoutes')
const cookieParser = require('cookie-parser')
const {requireAuth} = require('./middleware/authMiddleware')

require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.get('/protected', requireAuth)
app.get('/works',(req,res) => {
    res.send('dklnsd.kfnk.nd')
})
app.listen(process.env.PORT, () => {
    console.log('app running on ' + process.env.PORT)
})

app.use(authRoutes)
app.use('/admin',adminRoutes)

//PASSWORD minimum length