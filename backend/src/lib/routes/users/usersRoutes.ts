import { Router } from "express";
import apiRoute from "./apis";
import UserReq from "../../presentation/users/users";

const router = Router();
const { GET_USERS, GET_RANDOM_USER } = apiRoute;
const { handleGetUser, handleGetRandomUser } = UserReq;

// Marchent App
router.get(`${GET_USERS}`, handleGetUser);
router.get(`${GET_RANDOM_USER}`, handleGetRandomUser);

export default router;
