import cors from "cors";
import { envsAdapter } from "../envs.adapter";
import type { CorsOptions } from "vite";
 
const { FRONTEND_URL} = envsAdapter
export class CorsAdapter {
    private origins: string[];
    constructor (origins?: string[]){
        this.origins = origins || FRONTEND_URL;
    }
    public getMiddleware() {
        const options: CorsOptions = {
            origin: (origin: string | undefined, callback: Function) => {
                if (!origin || this.origins.includes(origin)) {
                    callback(null, true);
                } else {
                    callback(new Error(`CORS policy: Origin ${origin} not allowed`));
                }
            },
            credentials: true,
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
        };
        return cors(options)
    }
}