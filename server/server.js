const express = require ('express');
const app = express();

app.get("/api", (req, res) => {
    res.json ({"animes": ["anime1", "anime2", "anime3","anime4", "anime5"]});
})

app.listen(5000, () => {console.log ("Server started on port 5000")});