import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";

let server: Server;
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://ecommerceBackend:3jbgOonMqdOFarfd@cluster0.waps95s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (err) {
    console.log(err);
  }
}
main();

app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
});
