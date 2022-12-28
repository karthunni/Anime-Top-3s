const express = require ('express');
const app = express();

app.get("/api", (req, res) => {
    res.json ({"images": ["image1", "image2","image3", "image4", "image5"]});
})

app.listen(5000, () => {console.log ("Server started on port 5000")});