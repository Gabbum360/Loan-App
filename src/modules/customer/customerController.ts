import { Body } from 'tsoa';
//import { Request } from 'express';
import { FastifyInstance } from "fastify";
import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateCustomerInput } from "../customer/customerSchema";
import { createUser, createU, getCustomers, findCustomer, createCustomer, UserAccount, register } from "../customer/customerService";

export async function registeCustomerHandler(
    req: FastifyRequest<{ Body: CreateCustomerInput }>,
    res: FastifyReply) {

    try {
        const user = await createUser({
            ...req.body
        });
        //return res.code(201).send(user);
        return user;
    } catch (e) {
        console.log(e);
        return res.code(500).send(e);
    };
};

export async function registCustomerHandler(
    req: FastifyRequest<{Body: UserAccount}>,
    res: FastifyReply) {

        const {firstName, lastName, middleName, email, phoneInt, sex, dOB, occupation, country, state, city, address, bvn, postalCode, roleId, customerRemittaInformationId} = req.body;
        let user = findCustomer(email);
    try {
        const user = await register({
            firstName,
            lastName,
            middleName,
            email,
            sex,
            dOB,
            occupation,
            address,
            country,
            state,
            city,
            bvn,
            postalCode,
            roleId,
            customerRemittaInformationId,
            phoneInt,
            createdAt: new Date,
            password: ''
        });
        //log user creation...
        //return res.code(201).send(user);
        delete user.password;
        return user;
    } catch (e) {
        console.log(e);
        return res.code(500).send(e);
    };
};

export async function registerCustomerHandler(
    req: FastifyRequest<{Body: UserAccount}>,
    res: FastifyReply) {

        const {firstName, lastName, middleName, email, phoneInt, sex, dOB, occupation, country, state, city, address, bvn, postalCode, roleId, customerRemittaInformationId} = req.body;
        let user = findCustomer(email);
    try {
        const user = await createU({
            firstName,
            lastName,
            middleName,
            email,
            sex,
            dOB,
            occupation,
            address,
            country,
            state,
            city,
            bvn,
            postalCode,
            roleId,
            customerRemittaInformationId,
            phoneInt,
            createdAt: new Date,
        });
        //log user creation...
        //return res.code(201).send(user);
        delete user.password;
        return user;
    } catch (e) {
        console.log(e);
        return res.code(500).send(e);
    };
};

export async function getCustomerHandler(req: FastifyRequest, res: FastifyReply){
    const customers = await getCustomers();
    return customers;
    // try {
    // const customers = await getCustomers();
    //     return res.code(200).send(customers);
    // } catch (e) {
    //     console.log(e);
    //     return res.code(500).send(e);
    // };
};