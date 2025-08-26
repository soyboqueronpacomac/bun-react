import { Router } from "express";
import { UserController } from "../../controllers/users/user.controller";

export class UserRoutes {
    static get routes(): Router {
        const routes = Router();
        const userController = new UserController();
        // Definir rutas de usuarios aquí
        routes.get("/", userController.getUsers);
        return routes;
    }
}