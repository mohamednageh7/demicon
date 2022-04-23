import { model, Schema, Model } from "mongoose";
import { UsersSchema } from "../types/users/users";

const UsersSchema: Schema = new Schema<UsersSchema>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
    strict:false
  }
);

const Users: Model<UsersSchema> = model("Users", UsersSchema);

export default Users;
