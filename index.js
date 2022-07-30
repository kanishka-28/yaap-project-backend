const express = require("express");
const cors = require("cors")
const auth = require("./routes/auth")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
})

app.use("/auth", auth);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
})