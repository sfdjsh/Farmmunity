const express = require("express");
const cors = require('cors')

const app = express();
app.use(cors())

app.get("/test", (req, res) => {
  res.json({
    test: 'hello!'
  });
});

app.listen(3000, (req, res) => {
  console.log("Server Running..");
});
