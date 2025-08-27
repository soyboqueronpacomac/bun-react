import type { Request, Response } from "express";
import { CustomReponse } from "../../../domain/messages/custom.message";
import { RegisterUserDto } from "../../../domain/dtos/auth/register-user.dto";
import { CustomError } from "../../../domain";

export class AuthController {
    constructor(){}
    registerUser = (req: Request, res: Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if (error) {
            const err = CustomError.badRequest(error);
            return res.status(err.statusCode).json({ message: err.message });
        
        }
        console.log(registerUserDto);
        const response = CustomReponse.created(registerUserDto, "User registered successfully");
        res.status(response.statusCode).json(response);
    }

}