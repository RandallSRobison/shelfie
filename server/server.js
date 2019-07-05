require("dotenv").config();
const express = require("express");
const massive = require("massive");
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const ctrl = require("./controller");

const app = express();
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.addProduct)

app.listen(SERVER_PORT, () =>
  console.log(`Chillin out on port ${SERVER_PORT}`)
);
