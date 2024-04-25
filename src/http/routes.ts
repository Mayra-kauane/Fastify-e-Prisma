import { FastifyInstance } from "fastify"
// import { register } from "./controllers/register"
import { register } from "@/http/controllers/register"


export async function appRoutes(app: FastifyInstance){
    app.post('/users', register)
}
