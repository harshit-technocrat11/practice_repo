import express, { urlencoded } from "express"
const app = express()
import connectMongodb from "./connection.js";

import logReqRes from "./middlewares/logger.js";

import UserRouter from "./routes/index.js";

//port 
const PORT = 3000;
//connection 
connectMongodb("mongodb://127.0.0.1:27017/practice_set")
.then(()=> console.log("mongodb connected"))
.catch ((err) => console.log(err))

// middlewares
// app.use("log.txt", logReqRes)
logReqRes

app.use(express.urlencoded ({extended: true}))

//routes
app.use("/api/users", UserRouter)


app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
