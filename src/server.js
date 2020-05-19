const express = require("express");
const router = require("./routes");
const app = express();

app.use(router);

app.set("port", "8000"); // this should come from a config later

app.listen(app.get("port"), () => {
  console.log(`Anthem API online. Listening on port ${app.get("port")}`);
});
