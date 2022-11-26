const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send({ ip: req.ip, ips: req.ips, headers: req.headers })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
