import mongoose, { Mongoose } from "mongoose";
import { configs } from "../configs";
import MongoTransport from "winston-mongodb";
import chalk from 'chalk';
import { assert } from "console";
import { LogHelper } from "../helpers/log.helper";

let connect = null;

const connectMongo = () => {
  return mongoose.createConnection(configs.maindb, {
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
}

const connectMongov2 = async (connect: Mongoose) => {
  await connect.connect(configs.maindb, {
    socketTimeoutMS: 30000,
    keepAlive: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    LogHelper.getHeading("----- Db Connected -----");
  }).catch((err: Error) => {
    console.log(`     DB Connection Error: ${err.message}     `);
  });
}

const connectMongoTemp = (connect: Mongoose) => {
  connect.mongo.MongoClient.connect(configs.maindb, function (err, client) {
    assert(null, `     DB Connection Error: ${err.message}     `);
    console.log(chalk.bgRed("\n" + "                      " + "\n" + "     Db Connected     " + "\n" + "                      " + "\n"));
    const db = client.db("dev");
    client.close();
  });
}

(async () => {
  // connect = connectMongo();
  connect = mongoose;
  await connectMongov2(connect);
})();

export const MainConnection = connect;

export const getMongoTransportLog = (db: string) => new MongoTransport.MongoDB({
  db,
  collection: "errorlog",
  level: "error",
  tryReconnect: true,
});
