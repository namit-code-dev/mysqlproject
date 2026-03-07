const express=require("express");
const bodyparser=require("body-parser");
const jwt =require("jsonwebtoken");
const bcrypt = require('bcrypt');
const pool = require('./db');
const app=express()
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Server is running!'));
