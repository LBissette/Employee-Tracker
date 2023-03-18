const express = require('express');
const inquirer = require('inquirer')
const mysql = require('mysql2');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: employee_db,
  },
  console.log(`Connected to the employee_db database.`)
);
