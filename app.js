const express = require('express')
const path = require('path');
const app = express();
const port = 3030;

const otherRoutes = require('./routes/other.routes')

app.use(express.static('public'));
app.set("views", path.join(__dirname, "./views"));

app.set("view engine", "ejs");

app.use("/", otherRoutes)

app.listen(port);