require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const https = require('https');
const usersRouter = require('./routes/user');

const app = express();

// 미들웨어
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'https://localhost:3000',
  methods: ['GET', 'POST', 'OPTION'],
  credentials: true
}));
app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    domain: 'localhost',
    path: '/',
    maxAge: 24 * 6 * 69 * 10000,
    sameSite: 'none',
    httpOnly: true,
    secure: true
  }
}))

// 라우팅
app.use('/users', usersRouter);

// 서버 실행
const server = https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/key.pem', 'utf-8'),
      cert: fs.readFileSync(__dirname + '/cert.pem', 'utf-8')
    },
    app
  )
  .listen(4000);

module.exports = server;
