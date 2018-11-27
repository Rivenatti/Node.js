const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const User = require("./models/User");
const mongoose = require("mongoose");
mongoose.model("users");
const SecretKey = require("./config/secretKeys");
const opts = {};

opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SecretKey.SECRET_KEY;

module.exports = passport => {
  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
