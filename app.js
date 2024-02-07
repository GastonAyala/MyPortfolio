const express = require('express')
const app = express();

const port = 3030;

const otherRoutes = require('./routes/other.routes')

app.use(express.static('public'));

app.use("/", otherRoutes)

app.listen(port);