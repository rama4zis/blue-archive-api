const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.status(200).send({
        data: "This is your data"
    })
})

app.listen(port, () => {
    console.log('Server is alive')
})