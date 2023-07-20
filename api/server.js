"use strict";

const express = require("express");

// Database
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "db",
  database: "test",
  password: "password",
  port: 5432,
});

// Constants
const PORT = 8080;

// App
const app = express();

app.get("/", (req, res) => {
  pool.query("SELECT NOW()", (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(`Hello world ! It's ${ result.rows[0].now } !!`);
    }
  });
  
});

app.get("/healthz", (req, res) => {
  res.status(200).send('OK')
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
