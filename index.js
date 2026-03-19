require ('dotenv').config()
const PORT = 4242
const express = require('express')
const app = express()
app.use(express.json())

app.use('/', (req, res) => {
    res.send('Hello world')
})

app.use((err, req, res, next) => {
    // console.log(err)
    if (err) {
        console.log(err)
        res.status(500).json({
            message: err.meassage
        })
    }
    next()
})

app.listen(PORT, () => {
    console.log(`App is listening to PORT: ${PORT}`);
})