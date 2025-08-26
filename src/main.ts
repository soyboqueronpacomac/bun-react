import { envsAdapter } from "./adapters/envs.adapter";
import { AppExpress } from "./presentation/App.express";
import { AppRoutes } from "./presentation/routes/app.routes";

(async() => {
    main();
})();

async function main() {
    new AppExpress({
        port: envsAdapter.PORT,
        routes: AppRoutes.routes
    }).start();
    console.log(envsAdapter.FRONTEND_URL)
}