import type { Request, Response } from "express";
import { CustomReponse } from "../../../domain/messages/custom.message";

export class UserController {
    getUsers = (_req: Request, res: Response) => {
        const response = CustomReponse.ok(null, "Users fetched successfully");
        res.status(response.statusCode).json(response);
    }
}