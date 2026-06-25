const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const usersRouter = require("./routes/api/users");
const config = require("config");
const helmet = require("helmet");
const path = require("path");
const winston = require("winston");
const https = require("https");
const fs = require("fs");

const app = express();

// Logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "security.log" })
  ]
});
logger.info("Application started");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(helmet());

// DB Config
const db = config.get("mongoURI");
mongoose.connect(db)
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
app.use("/api/users", usersRouter);

// Production assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// SSL options
const httpsOptions = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

// HTTPS server only
const httpsServer = https.createServer(httpsOptions, app);
httpsServer.listen(8443, () => {
  console.log("HTTPS Server Listening on port 8443");
});

// Test route
app.get("/", (req, res) => {
  res.send("HTTPS server is running securely!");
});
