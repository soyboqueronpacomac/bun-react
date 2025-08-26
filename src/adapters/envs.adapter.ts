import { get } from "env-var";

export const envsAdapter = {
    PORT: get("PORT").default("8000").asPortNumber(),
    FRONTEND_URL: get("FRONTEND_URL").required().asString().split(",")
}