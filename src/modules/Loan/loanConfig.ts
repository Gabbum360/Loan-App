import { Loan } from "@prisma/client";
import prisma from "../../utils/client";

export interface LoanConfigData
    extends Omit<Loan, "id"> { };

export const createLoanConfig = async (data: LoanConfigData) => {
    try {
        const loanObject = await prisma.loan.create({
            data: {
                ...data
            },
        });
        return loanObject;
    } catch (error) {
        return error;
    };
};

export const getLoanConfig = async (isDefault: true) =>
{
    return prisma.loan.findFirst({
        where: {
            isDefault: isDefault
        },
    });
};

export const getLoanConfigById = async (loanConfigId: string) =>
{
    return prisma.loan.findFirst({
        where: {
            id: loanConfigId
        },
    });
};