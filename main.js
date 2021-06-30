const net = require("net");
const worket = require("./worker");

net
  .createServer((connection) => {
    console.log("connect running...");
    worket(connection);
  })
  .listen(8081);
