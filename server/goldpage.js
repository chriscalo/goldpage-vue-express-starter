import express from "express";
import goldpage from "goldpage";

const server = express();
export default server;

server.use(goldpage.express);
