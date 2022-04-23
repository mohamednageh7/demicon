import { Document } from "mongoose";

export interface UsersSchema extends Document {
  name: string;
  email: string;
  location: string;
  gender: string;
}

export interface UserInfo {
  _id?: string;
  name: string;
  email: string;
  location: string;
  gender: string;
}
