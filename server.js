const express = require("express");
const app = express();

app.use(express());

app.listen(6000, () => {
  console.log("server running at 6000");
});
