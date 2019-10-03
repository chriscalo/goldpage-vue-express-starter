const express = require('express');
const { start } = require('express-start');
const ssr = require('goldpage');

const server = express();

server.use(ssr.express);

start(server);
