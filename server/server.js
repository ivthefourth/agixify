const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const session = require('express-session');

require('rxjs');

const reducers = require('../src/data/reducers');
const epics = require('./serverEpics');
const { createStore, applyMiddleware } = require('redux');
const { createEpicMiddleware } = require('redux-observable');
const { getInitialState } = require('./mongo');

const GOOGLE_CLIENT_ID = '455707154430-lmqilhme1rn443ec02040luk3h463qht.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_SECRET;
const siteUrl = process.env.SITE_URL || 'http://localhost:8000'
const SESSION_SECRET = process.env.SESSION_SECRET || 'dont';



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: siteUrl + "/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
    console.log(profile)
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());


app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);


app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);



app.get('/', (req, res) => {
  if (req.isAuthenticated()){
    return res.sendFile('index.html', {
      root: __dirname + '/../build'
    });
  }
  else {
    return res.redirect('/login');
  }
});

//this is dumb
app.get('/index.html', (req, res) => {
  if (req.isAuthenticated()){
    return res.sendFile('index.html', {
      root: __dirname + '/../build'
    });
  }
  else {
    return res.redirect('/login');
  }
});

app.get('/login', (req, res) => res.sendFile('login.html', {
      root: __dirname + '/../public'
}));

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/login');
});

app.use(express.static('build'));

app.use(express.static('public/imgs'));

const epicMiddleware = createEpicMiddleware(epics(io));
const store = createStore(
  reducers,
    applyMiddleware(epicMiddleware)
);


const {INIT_STATE} = require('../src/data/actionTypes');

io.on('connection', function(socket){
   socket.emit('message', {type: INIT_STATE, state: store.getState()})
   socket.on('message', function(msg){
      //console.log(msg);
      msg.socket = socket;
      store.dispatch(msg);
   });
});
    

getInitialState()
   .then(state => store.dispatch({
      type: INIT_STATE,
      state
   }))
   .then(() => {
      http.listen(8000, () => {
        console.log('listening on *:8000');
      });
   })
   .catch(console.log)
;
