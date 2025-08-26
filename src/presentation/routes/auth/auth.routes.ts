import { Router } from "express";
import { AuthController } from "../../controllers/auth/auth.controller";

export class AuthRoutes {
    static get routes(): Router {
        const routes = Router();
        const authController = new AuthController();
        // Definir rutas de autenticación aquí
        routes.post("/register", authController.registerUser);
        return routes;
    }
}