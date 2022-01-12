
require ('dotenv').config() 
import "reflect-metadata";
import express from "express";
import { createConnection } from "typeorm";
import { User } from "./entities/User";
import { Post } from "./entities/Post";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { ApolloServer } from "apollo-server-express";
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { UserResolver } from "./resolvers/user";
import mongoose from "mongoose";
import session from "express-session";
// const MongoStore = require("connect-mongo");
import MongoStore from "connect-mongo";
import { COOKIE_NAME, __prod__ } from "./constants";
import { Context } from "./types/context";
import { PostResolver } from "./resolvers/post";
import cors from "cors";
import { Upvote } from "./entities/Upvote";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { buildDataLoaders } from "./utils/dataLoaders";
import path from "path";

// import { sendEmail } from "./utils/sendEmail";

const main = async () => {
  const connection = await createConnection({
    type: "postgres",
    ...(__prod__
      ? { url: process.env.DATABASE_URL }
      : {
          database: "full-stack",
          username: process.env.DB_USERNAME_DEV,
          password: process.env.DB_PASSWORD_DEV,
        }),

    logging: true,
    ...(__prod__
      ? {
          extra: {
            ssl: {
              rejectUnauthorized: false,
            },
          },
          ssl: true,
        }
      : {}),
    ...(__prod__ ? {} : { synchronize: true }),
    entities: [User, Post, Upvote],
    migrations: [path.join(__dirname, "/migrations/*")],
  });
  if (__prod__) await connection.runMigrations();

  // await sendEmail("gohome@gmail.com", "<b>Hello Gohome</b>");

  //KHONG KETNOI DC VOI PGADMIN
  const app = express();
  

  app.use(
    cors({
      origin: __prod__
        ? process.env.CORS_ORIGIN_PROD
        : process.env.CORS_ORIGIN_DEV,
      credentials: true,
    })
  );
  //SESSION/COOKIE STORE loi ket noi database
  const mongoUrl = `mongodb+srv://${process.env.SESSION_DB_USERNAME_DEV_PROD}:${process.env.SESSION_DB_PASSWORD_DEV_PROD}@cluster0.n5txx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
 await mongoose.connect(mongoUrl, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  console.log("MongoDB Connected");
  app.set("trust proxy", 1);

  app.use(
    session({
      name: COOKIE_NAME,
      store: MongoStore.create({ mongoUrl }),
      cookie: {
        maxAge: 1000 * 60 * 60,
        httpOnly: true, //,
        secure: __prod__,
        sameSite: "none", //protected against CSRF
      // domain:__prod__ ? '.vercel.app' : undefined
      
      },
      secret: process.env.SESSION_SECRET_DEV_PROD as string,
      saveUninitialized: false, //don't save empty sessions, right from the start
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, UserResolver, PostResolver],
      validate: false,
    }),

    context: ({ req, res }): Context => ({
      req,
      res,
      connection,
      dataLoaders: buildDataLoaders(),
    }),

    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, cors: false });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () =>
    console.log(
      `Server started on port ${PORT}.GraphQL server started on localhost:${PORT}${apolloServer.graphqlPath}`
    )
  );
};

main().catch((error) => console.log(error));
