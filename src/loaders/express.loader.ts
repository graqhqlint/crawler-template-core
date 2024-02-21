import compression from "compression";
import cors from "cors";
import express, { Request, Response } from "express";
import path from "path";
import morgan from "morgan";

import { configs } from "../configs";
import { LogHelper } from "../helpers/log.helper";
// import session from "express-session";
// import passport from "passport";
// import authRouter from "../passport/authRouter";
// import next from "next";
import router from "../routers";
// import { ContainereStates, PortainerHelper } from "../helpers/portainer.helper";
// import * as socketio from "socket.io";
// import * as Http from "http";

export default ({ app }: { app: express.Application }) => {
  app.use(cors());

  app.set("port", configs.port);
  app.use(compression());
  app.use(express.json({ limit: "10mb" }));
  app.use(express.urlencoded({ extended: true, limit: "10mb" }));

  // app.use(session({ secret: "secret" }));

  app.use(
    morgan(LogHelper.createApiGraphqlToken, {
      skip: (req: Request) => /(_ah\/health)|graphql|_next/.test(req.originalUrl),
    })
  );

  app.use("/public", express.static(path.join(__dirname, "../../public")));

  app.use("/", router);

  // const nextApp = next({ dev: configs.nextDev, dir: "./next" });
  // const handle = nextApp.getRequestHandler();
  // nextApp.prepare().then(() => {
  //   console.log("\n");
  //   LogHelper.logString("\n 🌞🌞🌞 Next App Initialized!", `${configs.domain}\n`);
  //   app.get("*", (req, res) => handle(req, res));
  // });

  // authRouter({ app });
};
