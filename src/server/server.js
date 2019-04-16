const express = require('express');
const session = require('express-session');
const auth = require('@ull-esit-pl/auth');

const app = express();

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
