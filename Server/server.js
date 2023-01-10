const express = require("express");
const mongoose = require('mongoose');
const colors = require("colors");
const PORT = process.env.PORT || 8000;
// const Auth = require("../server/Middlewares/Authen");

const app = express();

const dotenv = require("dotenv");
mongoose.set("strictQuery", false);
dotenv.config();


// connect db
const connectDB = require("./DB/db");
connectDB();

// app.post("/welcome", Auth, (req, res) => {
//   res.status(200).send("Welcome 🙌 ");
// });

app.use(express.json());
app.use("/api/users", require("./Routes/userRoute"));
// app.use("/api/admin", require("./Routes/adminRoute.js"));
app.use("/api/accounts", require("./Routes/accountsRoute.js"));
app.use("/api/releveBancaires", require("./Routes/releveBancaireRoute.js"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => console.log(`Server runing on ${PORT}`));
