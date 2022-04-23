import { UsersSchema, UserInfo } from "../../types/users/users";
import logger from "../../../logger";
import Users from "../../models/user";

const UsersDB = class UsersDB {
  static async findUsersDB(data?: UserInfo) {
    return await UsersDB.__findUsersDB(data);
  }

  static async createUserDB(data: UserInfo[]) {
    return await UsersDB.__createUserDB(data);
  }

  static async __findUsersDB(data: any = {}) {
    try {
      let users = await Users.aggregate([
        {
          $facet: {
            users: [
              { $match: { $and: [data] } },
              {
                $project: {
                  _id: 1,
                  gender: 1,
                  name: 1,
                  email: 1,
                  location: 1,
                },
              },
            ],
            countries: [
              { $match: { $and: [data] } },
              {
                $group: {
                  _id: "$_id",
                  country: { $first: "$location" },
                },
              },
              {
                $project: {
                  _id: 1,
                  country: 1,
                },
              },
            ],
          },
        },
      ]);
      return users;
    } catch (error) {
      logger.error({ findUsersDBError: error });
    }
  }

  static async __createUserDB(data: UserInfo[]) {
    try {
      let user = await Users.insertMany(data);
      return user;
    } catch (error) {
      logger.error({ createUserDBError: error });
    }
  }
};

export default UsersDB;
