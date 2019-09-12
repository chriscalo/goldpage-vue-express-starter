import express from "express";
import { start } from "express-start";
import ssr from "goldpage";

const server = express();

server.use(ssr.express);

start(server);
