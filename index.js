const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("dotenv").config();

// const pusher = new Pusher({
//   appId: process.env.appId,
//   key: process.env.key,
//   secret: process.env.secret,
//   cluster: process.env.cluster,
//   encrypted: true,
// });

const pusher = new Pusher({
  appId: "1563736",
  key: "c7c284690475db375827",
  secret: "26d8fcfd2fbbf4ca963e",
  cluster: "mt1",
  encrypted: true,
});

// app.get("/", (req, res) => {
//   console.log({
//     appId: process.env.appId,
//     key: process.env.key,
//     secret: process.env.secret,
//     cluster: process.env.cluster,
//   });
// });

app.post("/message", (req, res) => {
  const payload = req.body;
  pusher.trigger(req.query.channel, "message", payload);
  res.send(payload);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
