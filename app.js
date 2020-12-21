const express = require("express");
const app = express();

// mongodb+srv://kevinpark02:lUsZ1TNUbzDvGaq7@cluster0.tcw4p.mongodb.net/<dbname>?retryWrites=true&w=majority

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {console.log(`Listening on port ${port}`)});