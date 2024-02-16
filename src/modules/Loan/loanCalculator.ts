import { Loan } from "@prisma/client";
import prisma from "../../utils/client";
import { NotFoundError } from "../../errors/notFound";

export const loanCalculator = async (monthlySalary: number, loanAmount: number, loanTenure: number,
    averageMonthlyRepayment: number, isDefault: boolean) => {
    let loan =  prisma.loan.findMany({
        where: {isDefault: isDefault},
    });
    if(!loan) throw new NotFoundError("loan calculation failed!");
    
}