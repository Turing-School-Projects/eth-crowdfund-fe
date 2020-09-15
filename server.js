const server = require("express")();
const history = require("connect-history-api-fallback");
const path = require("path");
const serveStatic = require("serve-static");

server.use(history());
server.use(serveStatic(path.join(`${__dirname}/dist`)));

const port = process.env.PORT || 5000;
server.listen(port);

console.log(`Begin your campaign on http://localhost:${port}`);
