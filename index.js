const express = require("express");
const exchangeRouter = require("./routes/exchange.routes");

const app = express();

const PORT = 8082;

app.use('/exchange', exchangeRouter);

// app.get('/exchange', (req, res) => {
//     res.status(200).send("<h1>created by Rutik Rokade</h1><h1>Rokade Industries Ltd.</h1>");
//     res.end();
// });

app.listen(PORT, () => {
    console.log(`Node server started listening on port: ${PORT}`);
});