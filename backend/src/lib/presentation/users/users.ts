import { customeError } from "../../utils/errorMsg";
import { Request, Response } from "express";
import logger from "../../../logger";
import UsersController from "../../controllers/users/users";
import { UserInfo } from "../../types/users/users";

const UserReq = class ContactUsReq extends UsersController {
static async handleGetUser(req: Request, res: Response) {
    try {
      let query:any = req.query
      let users = await super.getAllUsers(query);
      logger.info({query})
      if (!users) {
        return res.status(400).send(customeError("get_user_error", 400));
      }
      return res.status(200).send(users);
    } catch (error) {
      logger.error({ handleGetUserError: error });
      return res.status(500).send(customeError("server_error", 500));
    }
  }


  static async handleGetRandomUser(req: Request, res: Response) { 
    try {
      let users = await super.getRandomUser();
      if (!users) {
        return res.status(400).send(customeError("get_user_error", 400));
      }
      return res.status(200).send(users);
    } catch (error) {
      logger.error({ handleGetRandomUserError: error });
      return res.status(500).send(customeError("server_error", 500));
    }
  }
};

export default UserReq;
