import { forEachChild } from "typescript";
import prisma from "../../utils/client"
import { NotFoundError } from "../../errors/notFound";
import { BadRequestError } from "../../errors/badRequest";

export const createApplicationRole = async (roleName: string, description: string) => {
    const role = await prisma.applicationRole.create({
        data: {
            name: roleName,
            description: description
        },
    });
    const checkIfExist = await getApplicationRoleByName(roleName);
    if(checkIfExist) throw new BadRequestError("role name already exist!!!");
    return role;
};

export const getApplicationRole = async (roleId: string) => {
    const result = await prisma.applicationRole.findUnique({
        where: { id: roleId }
    });
    return result;
}
export const getApplicationRoleByName = async (roleName: string) => {
    const result = await prisma.applicationRole.findUnique({
        where: { name: roleName }
    })
    return result;
}

export const getApplicationRoles = async () => {
    try {
        const roles = prisma.applicationRole.findMany();
        return roles; 
    } catch (error) {
        return error
    };
};