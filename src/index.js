const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

// Connect DB
db.connect();

app.use(express.json()); // Xử lý dữ liệu JSON từ request
app.use(express.urlencoded({ extended: true })); // Xử lý dữ liệu form
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// console.log("PATH:", path.join(__dirname, "/resources/views"));

//route init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
