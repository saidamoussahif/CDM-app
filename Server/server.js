const express = require("express");
const colors = require("colors");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8000;
const connectDB = require("./DB/db");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use(express.json());
app.use("/api/users", require("./Routes/userRoute"));
// app.use("/api/admin", require("./Routes/adminRoute.js"));
app.use("/api/accounts", require("./Routes/accountsRoute.js"));
app.use("/api/releveBancaires", require("./Routes/releveBancaireRoute.js"));

app.listen(PORT, () => console.log(`Server runing on ${PORT}`));
