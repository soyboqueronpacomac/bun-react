import { ValidatorAdapter } from "../../../adapters/validations/validator.adapter";

export class RegisterUserDto {
    public readonly name: string;
    public readonly email: string;
    public readonly password: string;

    private constructor(
        name: string,
        email: string,
        password: string,
    ) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static create(body:{[key: string]: any}): [string?, RegisterUserDto?] {
        const { name, email, password } = body;
        if (!name) return ["Name is required"];
        if (!email) return ["Email is required"];
        if (!ValidatorAdapter.email.test(email)) return ["Email is invalid"];
        if (!password) return ["Password is required"];
        if (password.length < 6) return ["Password must be at least 6 characters"];
        return [
            undefined,
            new RegisterUserDto(
                name,
                email,
                password
            )
        ];
    }
}