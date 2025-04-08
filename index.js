require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/tweet", (req, res) => {
    res.send("Hello Tweet!")
})
app.get("/login", (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(to right, #74ebd5, #9face6);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .login-container {
      background: #fff;
      padding: 30px 40px;
      border-radius: 15px;
      box-shadow: 0 0 20px rgba(0,0,0,0.1);
      text-align: center;
      width: 300px;
    }

    .login-container h2 {
      margin-bottom: 20px;
    }

    .login-container input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    .login-container button {
      width: 100%;
      padding: 10px;
      background-color: #4a69bd;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }

    .login-container button:hover {
      background-color: #3b5ca5;
    }

    #message {
      margin-top: 15px;
      color: red;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p id="message"></p>
    </form>
  </div>

  <script>
    document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("message");

      const validUsername = "admin";
      const validPassword = "1234";

      if (username === validUsername && password === validPassword) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        // window.location.href = "dashboard.html"; // example redirect
      } else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
      }
    });
  </script>
</body>
</html>
`)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})