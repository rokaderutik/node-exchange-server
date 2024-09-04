const express = require("express");

const server = express();

const PORT = 8081;

server.get('/exchange', (req, res) => {
    res.sendStatus(200);
    res.send("<h1>created by Rutik Rokade</h1><h1>Rokade Industries Ltd.</h1>");
    res.end();
});

server.listen(PORT, () => {
    console.log(`Node server started listening on port: ${PORT}`);
});