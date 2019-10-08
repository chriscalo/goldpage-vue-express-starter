import express from "express";
import { start } from "express-start";

import goldpageServer from "./goldpage";
import apiServer from "./api";

const server = express();

server.use(apiServer);
server.use(goldpageServer);

start(server);
