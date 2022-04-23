import express, { Application} from "express";
import morgan from "morgan";
import cors from "cors";
import mongoDB from "./db/dbConnect";
import cookieParser from 'cookie-parser'

import i18n from './i18n/config'

export const app: Application = express();

import usersRoute from './routes/users/usersRoutes'



app.use(cookieParser());


// middlewares
app.use(morgan("dev"));

// for parsing application/json
app.use(express.json());
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: '*',
    credentials: true, 
    optionsSuccessStatus: 200,
    allowedHeaders:['Content-Type', 'Authorization'],
    exposedHeaders:['Content-Range', 'X-Content-Range'],
    preflightContinue:true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);


// MongoDB init
mongoDB();


// i18n init
app.use(i18n.init)



app.use('/api',usersRoute)





