const express = require("express");
const cors = require("cors");

const router = require("./routes");

const backend = express();
backend.use(cors());
const port = 3003;

backend.use(router);

backend.listen(port, () => console.log(`Magic happens on port ${port}`));
