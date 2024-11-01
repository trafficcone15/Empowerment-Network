const express = require("express");
const contactRoutes = require("./routes/api/contact");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

var whitelist = ['http://localhost:5173', process.env.CLIENT_HOST_URL];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => res.send("Hello world!"));
const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));