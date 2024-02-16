import { ApprovalWorkFlow, LoanApplicationStatus, LoanDetails } from "@prisma/client";
import prisma from "./client";

export interface Input
extends Omit<ApprovalWorkFlow, "id" | "createdAt">{}

export const RejectLoan = async (data: Input) => {
    const approval =  prisma.approvalWorkFlow.create({
        data: {
            ...data
        }
    });
    return this;
}

export const ApproveLoan = async () => {
    const appr = LoanApplicationStatus.APPROVED;
    return appr;
}

export const ApproveLoanByCustomer = async () => {
    const appr = LoanApplicationStatus.ACTIVE;
    return appr;
}

export const SetLoanBalance = async (balance: Number) => {
    const bal = balance;
}