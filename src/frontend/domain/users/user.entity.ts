export interface RegisterUser {
    name: string;
    email: string;
    password: string;
}

export interface RegisterUserReturn {
    form : RegisterUser;
    message: string | null;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent) => Promise<void>; 
}

export const registerInitialState: RegisterUser = {
  name: "",
  email: "",
  password: "",
};

