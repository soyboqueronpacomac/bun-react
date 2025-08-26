import { Router } from "express";
import { AuthRoutes } from "../auth/auth.routes";
import { UserRoutes } from "../users/user.routes";

export class ApiRoutes {
    static get routes(): Router {
        const routes = Router();
        routes.get("/hello", (_req, res) => {
            res.json({ message: "Hola desde Express + Bun Backend 🚀 en routes" });
        });
        routes.use("/auth", AuthRoutes.routes);
        routes.use("/users", UserRoutes.routes)
        return routes;
    }
}