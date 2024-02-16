import { buildJsonSchemas } from "fastify-zod";
import {z} from "zod";
const customerInput = z.object({
    //id: z.string().uuid(),
    email: z.string({
        required_error: "email is required",
        invalid_type_error: "email is invalid"
    }).email(),
    firstName: z.string({
        invalid_type_error: ""
    }),
    lastName: z.string(), 
    middleName: z.string(),  
    phoneINT: z.string(),
    sex: z.string(),
    dOB: z.string(),
    occupation: z.string(),
    address: z.string().optional(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    //createdAt: z.string().datetime({offset: true}),
    bvn: z.string(),
    postalCode: z.string().optional(),
    password: z.string(),
    roleId: z.string(),
    LoaneeType: z.enum(["FIRST_TIMER", "RETURNING_LOANEE"])     ,
    customerRemittaInformationId: z.string()
});

const customerGenerated = {
    //id: z.string().uuid(),
    createdAt: z.string(),
};

const createCustomerSchema = z.object({
    customerInput,
    //...customerGenerated,
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }),
});

const customerResponseSchema = z.object({
    customerInput,
    ...customerGenerated,
});

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;

export const {schemas: customerSchemas, $ref} = buildJsonSchemas({
    createCustomerSchema,
    customerResponseSchema,
});