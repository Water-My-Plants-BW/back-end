const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");

const authRouter = require("../authentification/authRouters");
const plantRouter = require("../plant/plantsRouters");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use(authRouter);
server.use(plantRouter);

module.exports = server;
