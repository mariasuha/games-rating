const http = require('http');
const staticFile = require('./appModules/http-utils/static-file');
const mimeTypes = require('./appModules/http-utils/mime-types');
const fs = require("fs");
const path = require("path");
const mainRouteController = require('./controllers/main')
const defaultRouteController = require('./controllers/default')
const gameRouteController = require('./controllers/game')
const voteRouteController = require('./controllers/vote')

const PORT = 3005;

const server = http.createServer((req, res) => {
  const { method, url } = req;
  switch (url) {
    case "/":
      res.statusCode = 200;
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      res.statusCode = 200;
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.listen(PORT);
