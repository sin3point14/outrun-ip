const express = require('express')
const app = express()
const port = 42069

var message = "The game servers are currently down for maintenance"
const server_up = true;

app.get('/', async (req, res) => {
    if(server_up) {
        res.send({"ip":"sinpi.wtf", "port":3000});
    }
    else {
        res.send({"message":message});
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
