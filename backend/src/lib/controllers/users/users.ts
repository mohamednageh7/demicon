import logger from "../../../logger";
import { config } from "dotenv";
import { UserInfo } from "../../types/users/users";
import UsersDB from "../../dbCalls/users/users";
import fetch from "node-fetch";

config();

const UsersController = class UsersController extends UsersDB {
  static async createNewUser(data: UserInfo[]) {
    return await UsersController.__createNewUser(data);
  }

  static async getAllUsers(query:UserInfo){
    return await UsersController.__getAllUsers(query)
  }

  static async getRandomUser() {
    return await UsersController.__getRandomUser()
  }

  static async __getRandomUser(){
    try {
      let res = await fetch('https://randomuser.me/api/?inc=gender,name,location,email&results=50',{
        method:'GET'
      })
      let data = await res.json()

      let dataFotmat: UserInfo[]= data?.results.map((item:any) => {
        return{
          name:`${item.name.title} ${item.name.first} ${item.name.last}`,
          gender:item.gender,
          email:item.email,
          location:item.location.country
        }
      })
      let createdData = await UsersController.createNewUser(dataFotmat)
      return createdData
    } catch (error) {
      logger.error({ getRandomUserError: error });
    }
  }



  static async __getAllUsers(query:UserInfo){
    try {
        let users = await super.findUsersDB(query)
        return users
    } catch (error) {
      logger.error({ getAllUsersError: error });
    }
  }

  static async __createNewUser(data: UserInfo[]) {
    try {
      let user = await super.createUserDB(data);
      return user;
    } catch (error) {
      logger.error({ createNewUserError: error });
    }
  }
};

export default UsersController;
