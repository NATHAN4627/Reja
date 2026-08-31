const http = require("http");
const mongodb = require("mongodb");

let db;
let connectionString =
  "mongodb+srv://nodiroqilov86_db_user:Nodir556@cluster0.bcvgfgw.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Error on connection to MongoDB");
    } else {
      console.log("Connection success");
      module.exports = client;  // export, bcz we use it often

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3030;
      server.listen(PORT, function () {
        console.log(
          `Port: ${PORT} is running successfully on server, http://localhost:${PORT}`
        );
      });
    }
  }
);
