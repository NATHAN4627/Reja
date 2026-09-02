const http = require("http");
const mongodb = require("mongodb");

const connectionString =
  "mongodb+srv://nodiroqilov86_db_user:Nodir556@cluster0.bcvgfgw.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.log("Connection failed");
    } else {
      module.exports = client;
      const app = require("./app");

      const server = http.createServer(app);
      server.listen(3030, () => {
        console.log("Port is running");
      });
    }
  }
);
