import express from "express";
import { getApiResponse } from "wildcard-api"; // npm install wildcard-api

// Ensure the API gets initiated
import("~/api");

const server = express();
export default server;

// Parse the HTTP request body
server.use(express.json());

server.all("/wildcard/*" , async (req, res) => {
  const { statusCode, contentType, body } = await getApiResponse({
    // `getApiResponse` requires the HTTP request `url`, `method`, and `body`.
    url: req.url,
    method: req.method,
    body: req.body,
    headers: req.headers,
  });
  res.status(statusCode);
  res.type(contentType);
  res.send(body);
});
