const RequestParser = require("./utils/Parser");

module.exports = (connection) => {
  const parser = new RequestParser();

  connection.on("data", (buffer) => {
    parser.append(buffer);
  });

  parser.on("finish", () => {
    // plugin

    connection.stop(response);
  });
};
