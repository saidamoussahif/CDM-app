const express = require("express");
const colors = require("colors");
// const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;
const connectDB = require("./DB/db");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const cors = require('cors') // to allow cross origin requests


connectDB();
const app = express()

app.use(cors())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.use(express.json())
app.use(express.urlencoded({extended: false}))


// connectDB();
// const app = express()

// app.use(cors())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
// app.use(express.json());



app.use(express.json());
app.use("/api/users", require("./Routes/userRoute"));
app.use("/api/accounts", require("./Routes/accountsRoute.js"));
app.use("/api/releveBancaires", require("./Routes/releveBancaireRoute.js"));

app.listen(PORT, () => console.log(`Server runing on ${PORT}`));
