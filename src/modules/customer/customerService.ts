import { Password } from './../../helpers/pasword-hashing';
// import { crypto } from 'crypto';
// import { SetAddress, ReturnedUser } from './customerService';
import prisma from "../../utils/client";
//import { Customer} from "@prisma/client";
import { ApplicationRole, Customer, CustomerRemittaInformation, Prisma, PrismaClient } from '@prisma/client';
import { CreateCustomerInput } from "./customerSchema";
import {hashPassword} from "../../utils/hash";

// export interface Data1
// extends Pick<Customer, "id" | "createdAt">{};
export type UserAccount = Pick<
    Customer,
    "firstName" | "lastName" | "middleName" | "email" | "phoneInt" | "sex" |"createdAt"| "dOB" | "occupation" | "address" | "country" | "state" |"bvn"|"city"|"postalCode"|"roleId"|"customerRemittaInformationId"
    >;

export type ReturnedUser = Partial<Pick<Customer, "password">> &
Omit<Customer, "password">;


export const createCustomer = async (data: UserAccount): Promise<ReturnedUser> => {
const user: ReturnedUser = await prisma.customer.create({
    data: { ...data },
});
delete user.password;

return user;
};

export const register = async (data:{
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    sex: string;
    country: string;
    phoneInt: string;
    address: string | null;
    dOB: string;
    occupation: string;
    state: string;
    city: string;
    bvn: string;
    postalCode: string;
    roleId: string;
    customerRemittaInformationId: string;
    createdAt: Date;
    password: string;
}): Promise<ReturnedUser> => {
    const user: ReturnedUser = await prisma.customer.create({
        data: { ...data },
    });
    delete user.password;
    
    return user;
}

//not recommended...
export async function createU(input: UserAccount) {
    // const { password, ...rest} = input;     
    // const {hash, salt} = hashPassword(password);

    const userCreated: ReturnedUser = await prisma.customer.create({
        data: {...input },
    });
    delete userCreated.password;
    return userCreated;
};

export  function getCustomers (){
    return  prisma.customer.findMany({
        select:{
            firstName: true,
            email: true,
            id: true,
            CustomerRemittaInfo:{
                select: {
                    averageSixMonthsSalary: true,
                    isRemittaUser: true,
                    id: true,
                },
            },
        },
    });
};

// export async function creatU(input: Data1 & {customerId: string}) {
//     // const { password, ...rest} = input;     
//     // const {hash, salt} = hashPassword(password);

//     const userCreated = await prisma.customer.create({
//         data: {...input},
//     });
//     return userCreated;
// }

export const createUser = async (input:CreateCustomerInput) => {
    const {password, ...rest} = input;
    const {salt, hash} = hashPassword(password);

    const user = await prisma.customer.create({
    data: {...rest, salt, password: hash}
    });
    // const check = await findCustomer(user.email);
    // if (check) throw new Error("already exist!!");
    return user;
}

export const findCustomer = async (email: string) => {
    const cust = await prisma.customer.findFirst(
        {
            where: {
                email: email
            },
        },
    );
    return cust;
}

export function SetFirstname (firstname: string) {
    const name = firstname;
    return name;
}
export function SetLastname (lastname: string) {
    const name = lastname;
    return name;
}
export function SetOccupation (occupation: string)  {
    const name = occupation;
    return name;
}
export function SetMiddleName  (middleName: string) {
    const name = middleName;
    return name;
}
export function SetEmail (email: string) {
    const name = email;
    return name;
}
export function SetPhoneNumber (phonenumber: string) {
    const name = phonenumber;
    return name;
}
export function Setsex (sex: string) {
    const name = sex;
    return name;
}
export function SetDOB (dob: string) {
    const name = dob;
    return name;
}
export function SetAddress(address: string) {
    const name = address;
    return name;
}
export function SetState(state: string) {
    const name = state;
    return name;
}
export function SetCity(city: string) {
    const name = city;
    return name;
}
export function SetBvn (bvn: string) {
    const name = bvn;
    return name;
}
export function SetPostalCode (postalCode: string) {
    const name = postalCode;
    return name;
}
export function SetCountry (country: string) {
    const name = country;
    return name;
}
