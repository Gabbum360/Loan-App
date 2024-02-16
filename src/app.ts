//import { jwt } from 'jsonwebtoken';
import Fastify from "fastify";
//import fjwt from "fastify-jwt";
//import swagger from "fastify-swagger";
import { withRefResolver } from "fastify-zod";//for swagger registration.
import customerRoutes from "./modules/customer/customerRoute";
import { customerSchemas } from "./modules/customer/customerSchema";
import { version } from "../package.json";// this helps import package.json alow by uncommenting it from tsconfig.json file

const server = Fastify();

// server.register(fjwt, {
//     secret: "hvudvfahvftvyutsfdtvdutcv",
// });

// server.decorate("auth", async (req:FastifyRequest, res:FastifyReply) => {
//     try {
//     await req.jwtVerify();    
//     } catch (error) {
//         return res.send(error)
//     }
// });

server.get("/healthCheack", async function () {
    return { status: "Ok"};
});

async function main(){
    //register swagger Ui...
    // server.register(
    //     swagger,
    //     withRefResolver({
    //         routePrefix: '/docs',
    //         exposeRoute: true,
    //         staticCSP: true,
    //         openapi: {
    //             info:{
    //                 title: "Fastify API",
    //                 description: "API for Loan App",
    //                 version
    //             },
    //         },
    //     })
    // );

    for (const schema of [...customerSchemas]) {
        server.addSchema(schema);
    }

    server.register(customerRoutes, {prefix: 'api/customer'});
    //server.register
    try {
       await server.listen(3000, '0.0.0.0');
       
       console.log('Server ready at http://localhost:3000');
       console.log("Hello world!")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

// app.use(
//     "/docs",
//     swaggerUi.serve,
//     swaggerUi.setup(undefined, {
//       swaggerOptions: {
//         url: "/swagger.json",
//       },
//     })
//   );

 main();
// console.log("hello world!")
 //export default server;