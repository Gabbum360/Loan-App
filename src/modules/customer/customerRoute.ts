import { FastifyInstance } from "fastify";
import { getCustomerHandler, registerCustomerHandler } from "./customerController";
import Fastify from "fastify";
import {$ref} from "./customerSchema";

const server = Fastify();

export async function customerRoutes(server: FastifyInstance){
    server.post('/', /*{schema: {
        body: $ref("createCustomerSchema"),
        response: {
            201: $ref("customerResponseSchema"),
        },
    }}, */registerCustomerHandler);

    server.get('/', /*{schema: {
        //body: $ref("createCustomerSchema")
    }},*/ getCustomerHandler);
}

// export async function customerRoute(server: FastifyInstance){
//     server.get('/', {schema: {
//         //body: $ref("createCustomerSchema")
//     }}, getCustomerHandler);
// }



export default customerRoutes;