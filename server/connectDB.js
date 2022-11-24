import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config();

async function connectWithDB(app) {
  try {
    let port = process.env.PORT || 3000;
    console.log(process.env.MONGO_CONNECTION_STRING);
    connect(process.env.MONGO_CONNECTION_STRING).then(() =>
      app.listen(port, () => {
        console.log("Running on port:", port);
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export default connectWithDB;
