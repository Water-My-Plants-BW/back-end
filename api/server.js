const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/middleware.js');
const authRouter = require('../auth/auth-router.js');
const plantsRouter = require('../plants/plants-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/plants', authenticate, plantsRouter);

module.exports = server;
