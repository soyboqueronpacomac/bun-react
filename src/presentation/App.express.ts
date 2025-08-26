import express, { Router, type Application } from 'express';
import { join } from 'path';
import { CorsAdapter } from '../adapters/cors/cors.adapter';
interface Options {
    port: number;
    routes: Router;
}

export class AppExpress {
    public readonly app: Application = express();
    private port: number;
    private readonly routes: Router;
    private readonly corsAdapter: CorsAdapter;
    constructor( options:Options){
        const { port, routes } = options;
        this.port = port;
        this.routes = routes;
        this.corsAdapter = new CorsAdapter();
    }
    start() {
        // Usar middleware CORS antes de cualquier otra ruta
        this.app.use(this.corsAdapter.getMiddleware());

        // Sirve estáticos del frontend
        this.app.use(express.static(join(__dirname, "../dist")));
        
        // API de ejemplo
       this.app.use(this.routes);
        
        this.app.listen(this.port, () => {
          console.log(`✅ Server running on http://localhost:${this.port}`);
        });
    }
}