const path = require('path');
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile("./index.html", {root: __dirname});
});

app.listen(PORT, ()=>{});