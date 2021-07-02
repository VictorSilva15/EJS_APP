const express = require("express");
const faker = require("faker");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/about", (req, res) => {
  let users = [
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: "http://placekitten.com/300/300",
    },
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: "http://placekitten.com/400/300",
    },
    {
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: "http://placekitten.com/500/300",
    },
  ];

  res.render("pages/about", { usuarios: users });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.post("/contact", (req, res) => {
  res.send(
    `Obrigado por entrar em contato conosco ${req.body.name}! Responderemos em breve!`
  );
});

app.use(express.static(__dirname + "/public"));
app.listen(port);
console.log("Servidor iniciado em http://localhost:" + port);
