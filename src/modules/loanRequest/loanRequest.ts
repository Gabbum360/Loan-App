import { ApprovalWorkFlowConfiguration, LoanDetails, ProofOfAddress, SalaryDetails } from '@prisma/client';
//import { Customer } from '@prisma/client';
import { Customer, KycDetails, LoanApplicationStatus } from "@prisma/client";
import prisma from "../../utils/client";
import { SetAddress, SetBvn, SetCity, SetCountry, SetFirstname, SetLastname, SetMiddleName, SetOccupation, SetPhoneNumber, SetPostalCode, SetState, Setsex } from '../customer/customerService';
import { randomUUID } from 'crypto';

export const CreateLoanRequest = async (appr: ApprovalWorkFlowConfiguration, customerId: string, proofOfAddress: ProofOfAddress, loanDetails: LoanDetails, kycDetails: KycDetails, salaryDetails: SalaryDetails) => {
    //const kycD = {kycDetails};
    const pendingLoan = await prisma.loanRequest.findFirst({
        where: { id: customerId }
    });
    if (pendingLoan) throw new Error("customer can not request for loan while another is pending");
    const customer = await prisma.loanRequest.findFirst({
        where: { id: customerId }
    });
    if (!customer) throw new Error("customer does not exist!!"); 
    SetFirstname(kycDetails.customerFirstName);
    SetLastname(kycDetails.customerLastName);
    SetOccupation(kycDetails.customerOccupation);
    SetMiddleName(kycDetails.customerMiddleName);
    SetPhoneNumber(kycDetails.customerPhoneInt);
    SetCountry(kycDetails.customercountry);
    SetCity(kycDetails.customercity);
    SetState(kycDetails.customerState);
    SetPostalCode(kycDetails.customerPostalcode);
    SetAddress(kycDetails.customerAddress);

    const defaultLoan = await prisma.loan.findFirst({
        where: {
            isDefault: true,
            id: customerId
        }
    });
    if(defaultLoan == null) throw new Error("Unable to process loan, customer is defaulting!!");
    const kycD = kycDetails;
    const loanD = loanDetails;
    const salaryD = salaryDetails;
    const proofOfAddr = proofOfAddress;
    const loanRequestId = String;

    //
    //const approvalWorkFlowConfiguration = await prisma.approvalWorkFlowConfiguration.findFirst()
}

export const SetRejectionDateLoan = async () =>{
    const status = LoanApplicationStatus.REJECTED
    return status;
}

export const RejectionLoan = async () =>{
    const reject = prisma.approvalWorkFlow.findFirst
    return reject;
}

export const SetInterestRate = async (amount: Number) => {

}