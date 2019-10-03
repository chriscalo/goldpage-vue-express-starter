import express from "express";
import { start } from "express-start";

import goldpageServer from "./goldpage";

const server = express();

server.use(goldpageServer);

start(server);
