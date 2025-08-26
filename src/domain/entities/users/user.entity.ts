export class UserEntity {
    /**
     * Creates a new User entity.
     * 
     * @param id - The unique identifier for the user.
     * @param name - The name of the user.
     * @param email - The email address of the user.
     * @param password - The hashed password of the user.
     * @param role - An array of roles assigned to the user.
     * @param img - (Optional) The URL or path to the user's profile image.
     */
    id: string;
    name: string;
    email: string;
    password: string;
    role: string[];
    img?: string;

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role: string[],
        img?: string,
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.img = img;
    }
}