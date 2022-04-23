import { connect, ConnectOptions} from "mongoose";
import { config } from "dotenv";
import logger from "../../logger";


config();

const db: string =
  process.env.NODE_ENV === "development"
    ? process.env.MONGODB_DEV_URL
    : process.env.MONGODB_PROD_URL;
logger.info({db})
interface DBOptions {
  useNewUrlParser: Boolean;
  useUnifiedTopology: Boolean;
}

const mongoDB: () => Promise<void> = async () => {
  try {
    const options: DBOptions & ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await connect(db, options);
    console.log("Mongo DB connected");

  } catch (error) {
    console.error({ mongoDBError: error });
    process.exit(1);
  }
};

export default mongoDB;
