

import fs from "fs"
import express from "express"
const app = express()

async function logReqRes(filename) {
    app.use(req,res)
        fs.appendFile(
          filename,
          `\n${Date.now()}:${req.ip}<=>${req.method}<=>${req.path}`,
          (err) => {
            next();
          }
        );

    }


export default logReqRes;
