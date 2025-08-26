import type { Request, Response } from "express";
import { CustomReponse } from "../../../domain/messages/custom.message";

export class AuthController {
    constructor(){}
    registerUser = (_req: Request, res: Response) => {
        const response = CustomReponse.created(null, "User registered successfully");
        res.status(response.statusCode).json(response);
    }

}