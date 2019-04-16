const path = require('path');
const express = require('express');
const session = require('express-session');
const auth = require('@ull-esit-pl/auth');

const app = express();
//
app.set('view engine', 'ejs');


/*
app.get('/login', function(req, res) {
    res.render('../views/login');
});

app.get('/logout', function(req, res) {
    res.render('../views/logout');
});

app.get('/register', function(req, res) {
    res.render('../views/register');
});

//*/
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(session({
    secret: 'verySecureSecret',
    resave: true,
    saveUninitialized: true,
}));

app.use('/', auth({
    passwordFile: path.join(__dirname, 'users.json'),
    pathToProtect: path.join(__dirname, '../../', 'dist'),
    registerView: 'register',
    successRegisterView: 'registerSuccess',
    errorRegisterView: 'registerError',
    loginView: 'login',
    successLoginView: 'loginSuccess',
    errorLoginView: 'loginError',
    logoutView: 'logout',
    unauthorizedView: 'unauthorizedView',
}));
//
app.get('/', function(req, res) {
    res.render('index');
});
app.listen(8080);
//