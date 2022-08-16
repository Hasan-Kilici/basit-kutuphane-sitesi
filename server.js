const http = require("http");
const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const server = http.createServer(app);
const path = require("path");

const cookieParser = require("cookie-parser");
const axios = require("axios");
app.use(cookieParser());
const port = 8080;

//Socket
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Kullanıcı Giriş yaptı");
  socket.on("disconnect", () => {
    console.log("Kullanıcı Çıkış yaptı");
  });
});
//Generate token
function generate_token(length) {
  var a =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join(""); 
}
//Upload file
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/data");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
  },
});
const upload = multer({ storage: storage });
app.post("/stats", upload.single("uploaded_file"), function (req, res) {
  console.log(req.file, req.body);
});
//Body Parser
app.use(bodyParser.json()).use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//Statik
app.use(express.static("public"));
app.set("src", "path/to/views");
app.use("/uploads", express.static("public/data"));
//MongoDB
const dbURL = process.env.db;
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    server.listen(port, () => {
      console.log("mongoDB Bağlantı kuruldu");
    });
  })
  .catch((err) => console.log(err));
//Collections
let Books = require("./models/books.js");
let Users = require("./models/users.js");
//viewPort
app.set("view engine", "ejs");
//DB Support
app.use(morgan("dev"));
//Pages
//Home
app.get("/", (req, res) => {
  let token = req.cookies.token;
  Books.find()
    .sort({ createdAt: -1 })
    .then((bookResult) => {
      if (token != null) {
        Users.findOne({ token: token }).then((userResult) => {
          res.render(`${__dirname}/src/user/index.ejs`, {
            title: "Home",
            user: userResult,
            books: bookResult,
          });
        });
      } else {
        res.render(`${__dirname}/src/pages/index.ejs`, {
          title: "Home",
          books: bookResult,
        });
      }
    });
});
//Book
app.get("/book/:url/:token", (req, res) => {
  let url = req.params.url;
  let bookToken = req.params.token;
  let userToken = req.cookies.token;

  Books.findOne({ token: bookToken }).then((bookResult) => {
    if (userToken != null) {
      Users.findOne({ token: userToken }).then((userResult) => {
        res.render(`${__dirname}/src/user/book.ejs`, {
          title: bookResult.title,
          books: bookResult,
          user: userResult,
        });
      });
    } else {
      res.render(`${__dirname}/src/pages/book.ejs`, {
        title: bookResult.title,
        books: bookResult,
      });
    }
  });
});
//Register
app.get("/register", (req, res) => {
  var userToken = req.cookies.token;
  if (userToken != null) {
    res.redirect("/");
  } else {
    res.render(`${__dirname}/src/pages/register.ejs`, { title: `Kayıt ol` });
  }
});
//Login Page
app.get("/login", (req, res) => {
  var userToken = req.cookies.token;
  if (userToken != null) {
    res.redirect("/");
  } else {
    res.render(`${__dirname}/src/pages/login.ejs`, { title: `Giriş yap` });
  }
});
//LOG Out
app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});
//Admin Pages
app.get("/admin/home", (req, res) => {
  let token = req.cookies.token;
  Users.findOne({ token: token }).then((userResult) => {
    if (userResult.admin == "true") {
      Books.find()
        .sort({ createdAt: -1 })
        .then((bookResult) => {
          res.render(`${__dirname}/src/admin/index.ejs`, {
            books: bookResult,
            user: userResult,
            title: "Admin Home",
          });
        });
    } else {
      res.redirect("/");
    }
  });
});
//Book page
app.get("/admin/book/:url/:token", (req, res) => {
  let userToken = req.cookies.token;
  let bookToken = req.params.token;
  let url = req.params.url;
  Users.findOne({ token: userToken }).then((userResult) => {
    if (userResult.admin == "true") {
      Books.findOne({ token: bookToken }).then((bookResult) => {
        res.render(`${__dirname}/src/admin/book.ejs`,{
          title: bookResult.title,
          user: userResult,
          books: bookResult,
        });
      });
    } else {
      res.redirect("/");
    }
  });
});
//Dashboard
app.get("/admin/dashboard", (req, res) => {
  let token = req.cookies.token;
  Users.findOne({ token: token }).then((userResult) => {
    if (userResult.admin == "true") {
      Books.find()
        .sort({ createdAt: -1 })
        .then((bookResult) => {
          res.render(`${__dirname}/src/admin/dashboard.ejs`, {
            user: userResult,
            books: bookResult,
            title: `${userResult.username} Dashboard`,
          });
        });
    } else {
      res.redirect("/");
    }
  });
});
//Forms
app.post("/add/book", upload.single("uploaded_file"), (req, res) => {
  let token = req.cookies.token;
  Users.findOne({ token: token }).then((userResult) => {
    if (userResult.admin == "true") {
      let book = new Books({
        title: req.body.title,
        description: req.body.description,
        photo: `/uploads/${req.file.filename}`,
        url: req.body.url,
        token: generate_token(12),
      });
      book.save().then((result) => {
        res.redirect(`/admin/dashboard/`);
      });
    } else {
      res.redirect("/");
    }
  });
});
//Remove book
app.post("/remove/book/:token", (req, res) => {
  let bookToken = req.params.token;
  let userToken = req.cookies.token;
  Users.findOne({ token: userToken }).then((userResult) => {
    if (userResult.admin == "true") {
      Books.findOneAndDelete({ token: bookToken }).then((result) => {
        res.redirect(`/admin/dashboard`);
      });
    } else {
      res.redirect("/");
    }
  });
});
//Register Form
app.post("/register", (req, res) => {
  var username = req.body.username;
  Users.findOne({ username: username }, (user, err) => {
    if (user) {
      res.send(
        `Bu kullanıcı adı zaten kullanımda <a href="/register">Geri Dön</a>`
      );
    } else {
      var user = new Users({
        username: username,
        password: req.body.password,
        email: req.body.email,
        token: generate_token(22),
      });
      user.save().then((Save) => {
        res.cookie("token", `${Save.token}`);
        res.redirect("/");
      });
    }
  });
});
//Login Form
app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  Users.findOne({ username: username, password: password })
    .then((UserResult) => {
      res.cookie("token", UserResult.token);
      res.redirect("/");
    })
    .catch((err) => {
      res.send("Böyle bir kullanıcı Yok <a href='/register'>Kayıt ol</a>");
    });
});
