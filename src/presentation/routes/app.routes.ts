import { Router } from "express";
import { ApiRoutes } from "./api/api.routes";
import { join } from "path";

export class AppRoutes {
    static get routes(): Router{
        const routes = Router();
        routes.use("/api", ApiRoutes.routes);
        routes.use((_req, res) => {
                  res.sendFile(join(__dirname, "../dist/index.html"));
                })
        return routes;
    }
}