"use strict";

const express = require("express");
const env = process.env

// Database
const Pool = require("pg").Pool;
const pool = new Pool({
  user: env.POSTGRES_USER,
  host: env.POSTGRES_HOST || "db",
  database: env.POSTGRES_DB,
  password: env.POSTGRES_PASSWORD,
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
