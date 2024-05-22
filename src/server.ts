import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";
import config from "./app/config";

let server: Server;
async function main() {
  const a = 10;
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
