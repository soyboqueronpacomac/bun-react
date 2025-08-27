export class CustomError extends Error {
    public readonly statusCode: number;

    constructor(
        message: string,
        statusCode: number
    ){
        super(message);
        this.statusCode = statusCode;
    }

    static badRequest(message: string): CustomError {
        return new CustomError(message, 400);
    }
    static unauthorized(message: string): CustomError {
        return new CustomError(message, 401);
    }
    static forbidden(message: string): CustomError {
        return new CustomError(message, 403);
    }
    static notFound(message: string): CustomError {
        return new CustomError(message, 404);
    }
    static conflict(message: string): CustomError {
        return new CustomError(message, 409);
    } 
    static internal(message: string): CustomError {
        return new CustomError(message, 500);
    }
}