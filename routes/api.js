const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const db = require('../database/db');
const data = require("../data");

// JWT
const jwt = require("jsonwebtoken");


router.post("/auth", (req, res) => {
    let user = data.users.filter(user => {
      return user.name === req.body.name && user.password === req.body.password;
    });
    if (user.length) {
      let token_payload = { name: user[0].name, password: user[0].password };
      let token = jwt.sign(token_payload, "jwt_secret_password", {
        expiresIn: "2h" 
      });
      let response = {
        message: "Token Created, Authentication Successful!",
        token: token
      };
      console.log(req);
  
      return res.status(200).json(response);
    } else {
      return res.status("409").json("Authentication failed. User not found.");
    }
});

// Test
router.get("/users", (req, res) => {

  const users = [{
    name: "Emmanuel",
    age: "18"
  },
  {
    name: "Sam",
    age: "16"
  }];

  res.json({users});

});

module.exports = router;