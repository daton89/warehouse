/**
 * Express configuration
 */

'use strict';

const express = require('express');
// const favicon = require('serve-favicon');
const morgan = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
// const cookieParser = require('cookie-parser');
// const errorHandler = require('errorhandler');
const path = require('path');
const config = require('./environment');
// const passport = require('passport');
// const session = require('express-session');
// const connectMongo = require('connect-mongo');
const mongoose = require('mongoose');
// const rest = require('../util/rest');
// var mongoStore = connectMongo(session);
const cors = require('cors');


module.exports = function (app) {
    var env = app.get('env');
    // if (env === 'production') app.enable('trust proxy');

    // app.set('views', config.root + '/server/views');
    // app.engine('html', require('ejs').renderFile);
    // app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.json({
        strict: true,
        inflate: true,
        limit: "5mb"
    }));
    app.use(bodyParser.urlencoded({
        extended: false,
        inflate: true,
        limit: "5mb",
        parameterLimit: 1000
    }));
    app.use(methodOverride());
    // app.use(cookieParser());
    // Persist sessions with mongoStore / sequelizeStore
    // We need to enable sessions for passport-twitter because it's an
    // oauth 1.0 strategy, and Lusca depends on sessions
    // app.use(session({
    //     name: config.session.name,
    //     secret: config.session.secret,
    //     resave: config.session.resave,
    //     rolling: config.session.rolling,
    //     saveUninitialized: config.session.saveUninitialized,
    //     cookie: {
    //         secure: config.session.cookie.secure,
    //         maxAge: config.session.cookie.maxAge
    //     },
    //     store: new mongoStore({
    //         mongooseConnection: mongoose.connection,
    //         autoRemove: config.sessionStore.autoRemove,
    //         stringify: config.sessionStore.stringify,
    //         collection: config.sessionStore.collection
    //     })
    // }));
    // app.use(passport.initialize());
    // app.use(passport.session());

    // Attach cutom passport configuration
    // require('../auth/local/passport')(passport);


    if ('production' === env) {

        // app.use(favicon(path.join(config.root, 'create', 'dist', 'favicon.ico')));

        app.use('/', express.static(path.join(config.root, 'dist')));

        app.use(morgan('dev')); // TODO add custom token to show the username

    }

    if ('development' === env) {
        app.use(require('connect-livereload')());
    }

    if ('development' === env || 'test' === env) {

        // app.use(favicon(path.join(config.root, 'create', 'src', 'favicon.ico')));

        app.use('/', express.static(path.join(config.root, 'dist')));

        app.use(morgan('dev')); // TODO add custom token to show the username

        app.options('*', cors()); // TODO config that only from nginx can receive req (suca)
        app.use(cors());

    }
}
