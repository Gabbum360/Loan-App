-- CreateEnum
CREATE TYPE "ApprovalType" AS ENUM ('LOAN_REQUEST');

-- CreateEnum
CREATE TYPE "DisbursedLoanStatus" AS ENUM ('DELINQUENT', 'DISBURSED', 'COLLECTED_REPAYMENT', 'DUE_PAYMENT', 'WRITTEN_OFF', 'DEFAULTING_LOAN', 'MATURED_LOAN', 'NONE');

-- CreateEnum
CREATE TYPE "LoanApplicationStatus" AS ENUM ('APPROVED', 'REJECTED', 'ACTIVE', 'PENDING');

-- CreateEnum
CREATE TYPE "LoaneeTypes" AS ENUM ('FIRST_TIMER', 'RETURNING_LOANEE');

-- CreateEnum
CREATE TYPE "PaymentAttemptStatus" AS ENUM ('FAILED', 'SUCCESSFUL');

-- CreateEnum
CREATE TYPE "PaymentType" AS ENUM ('AUTOMATIC', 'MANUAL');

-- CreateEnum
CREATE TYPE "RepaymentScheduleType" AS ENUM ('MONTHLY', 'WEEKLY');

-- CreateEnum
CREATE TYPE "RepaymentStatus" AS ENUM ('PAID', 'UNPAID');

-- CreateEnum
CREATE TYPE "ScheduleStatus" AS ENUM ('PAID', 'UNPAID');

-- CreateEnum
CREATE TYPE "TicketInitiator" AS ENUM ('ADMIN', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "TicketStatus" AS ENUM ('OPEN', 'CLOSED');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('DISBURSEMENT', 'REPAYMENT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "googleID" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "address" TEXT,
    "supervisorId" TEXT,
    "profileImage" TEXT,
    "phoneInt" TEXT,
    "resetPasswordToken" TEXT,
    "resetPasswordExpires" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isPhoneVerified" BOOLEAN NOT NULL DEFAULT false,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "isEnabled" BOOLEAN NOT NULL DEFAULT true,
    "isLoggedIn" BOOLEAN NOT NULL DEFAULT false,
    "applicationRoleId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomerRemittaInformation" (
    "id" TEXT NOT NULL,
    "isRemittaUser" BOOLEAN NOT NULL,
    "averageSixMonthsSalary" INTEGER NOT NULL,
    "otherLoansCollected" INTEGER NOT NULL,

    CONSTRAINT "CustomerRemittaInformation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "KycDetails" (
    "id" TEXT NOT NULL,
    "customerFirstName" TEXT NOT NULL,
    "customerMiddleName" TEXT NOT NULL,
    "customerLastName" TEXT NOT NULL,
    "customerEmail" TEXT NOT NULL,
    "customerAddress" TEXT NOT NULL,
    "customercity" TEXT NOT NULL,
    "customerState" TEXT NOT NULL,
    "customercountry" TEXT NOT NULL,
    "customerPostalcode" TEXT NOT NULL,
    "customerOccupation" TEXT NOT NULL,
    "customerPhoneInt" TEXT NOT NULL,

    CONSTRAINT "KycDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanDetails" (
    "id" TEXT NOT NULL,
    "loanAmount" INTEGER NOT NULL,
    "loanBalance" INTEGER NOT NULL,
    "tenure" INTEGER NOT NULL,
    "purpose" TEXT NOT NULL,
    "RepaymentScheduleType" "RepaymentScheduleType" NOT NULL DEFAULT 'MONTHLY',

    CONSTRAINT "LoanDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProofOfAddress" (
    "id" TEXT NOT NULL,
    "proofOFAddressFileName" TEXT NOT NULL,
    "proofOFAddressFileType" TEXT NOT NULL,
    "proofOFAddressFileLength" INTEGER NOT NULL,
    "proofOFAddressFile" TEXT NOT NULL,

    CONSTRAINT "ProofOfAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SalaryDetails" (
    "id" TEXT NOT NULL,
    "averageMonthlyNetSalary" INTEGER NOT NULL,
    "salaryAccountInt" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "accountName" TEXT NOT NULL,

    CONSTRAINT "SalaryDetails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApplicationRole" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT,
    "updatedBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedOn" TIMESTAMP(3),

    CONSTRAINT "ApplicationRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalWorkFlow" (
    "id" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL DEFAULT false,
    "dateApproved" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateRejected" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aWFCId" TEXT NOT NULL,
    "approvalWorkFlowConfigurationId" TEXT,

    CONSTRAINT "ApprovalWorkFlow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalWorkflowApplicationRole" (
    "id" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "isApproved" BOOLEAN NOT NULL,
    "userId" TEXT NOT NULL,
    "rejectedBy" TEXT NOT NULL,
    "dateApproved" TIMESTAMP(3) NOT NULL,
    "dateRejected" TIMESTAMP(3) NOT NULL,
    "hierarchy" INTEGER NOT NULL,
    "aWFId" TEXT NOT NULL,

    CONSTRAINT "ApprovalWorkflowApplicationRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApprovalWorkflowApplicationRoleConfiguration" (
    "roleId" TEXT NOT NULL,
    "roleName" TEXT NOT NULL,
    "canOverrideAllApprovals" BOOLEAN NOT NULL DEFAULT true,
    "hierarchy" INTEGER NOT NULL,
    "aWFCId" TEXT NOT NULL,
    "applicationRoleId" TEXT,

    CONSTRAINT "ApprovalWorkflowApplicationRoleConfiguration_pkey" PRIMARY KEY ("roleId")
);

-- CreateTable
CREATE TABLE "ApprovalWorkFlowConfiguration" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ApprovalWorkFlowConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneInt" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "dOB" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "address" TEXT,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "bvn" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    "LoaneeType" "LoaneeTypes" NOT NULL DEFAULT 'FIRST_TIMER',
    "customerRemittaInformationId" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisbursementApproval" (
    "id" TEXT NOT NULL,
    "loanRequestId" TEXT NOT NULL,
    "otp" TEXT,
    "transferCode" TEXT NOT NULL,
    "transactionReference" TEXT NOT NULL,
    "isSuccessful" BOOLEAN NOT NULL,
    "disbursedLoanStatus" "DisbursedLoanStatus" NOT NULL DEFAULT 'NONE',

    CONSTRAINT "DisbursementApproval_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FailedPaymentAttempts" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "paymentAttemptStatus" "PaymentAttemptStatus" NOT NULL DEFAULT 'FAILED',
    "repaymentScheduleId" TEXT NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FailedPaymentAttempts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isDefault" BOOLEAN NOT NULL,
    "interestRate" INTEGER NOT NULL,
    "maximumLoanAmount" INTEGER NOT NULL,
    "minimumSalary" INTEGER NOT NULL,
    "maximumTenure" INTEGER NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoanRequest" (
    "id" TEXT NOT NULL,
    "bvn" TEXT NOT NULL,
    "loandApplicationStatus" "LoanApplicationStatus" NOT NULL DEFAULT 'PENDING',
    "disbursedLoanStatus" "DisbursedLoanStatus" NOT NULL DEFAULT 'NONE',
    "interest" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,
    "aWFId" TEXT NOT NULL,
    "kycDetailsId" TEXT NOT NULL,
    "salaryDetailsId" TEXT NOT NULL,
    "proofOfAddressId" TEXT NOT NULL,
    "loanDetailsId" TEXT NOT NULL,

    CONSTRAINT "LoanRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepaymentSchedule" (
    "id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "repaymentAmount" INTEGER NOT NULL,
    "loanBalance" INTEGER NOT NULL,
    "repaymentType" "RepaymentScheduleType" NOT NULL DEFAULT 'MONTHLY',
    "scheduleStatus" "ScheduleStatus" NOT NULL DEFAULT 'UNPAID',
    "loanRequestId" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paymentType" "PaymentType" NOT NULL DEFAULT 'AUTOMATIC',
    "transactionId" TEXT,
    "isDue" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "RepaymentSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "transactionReference" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "payload" TEXT NOT NULL,
    "repaymentStatus" "RepaymentStatus" NOT NULL,
    "isSuccessful" BOOLEAN NOT NULL,
    "transactionType" "TransactionType" NOT NULL,
    "repaymentScheduleId" TEXT,
    "loanRequestId" TEXT,
    "customerId" TEXT NOT NULL,
    "accountId" TEXT,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_googleID_key" ON "User"("googleID");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_resetPasswordToken_key" ON "User"("resetPasswordToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_resetPasswordExpires_key" ON "User"("resetPasswordExpires");

-- CreateIndex
CREATE UNIQUE INDEX "ApplicationRole_name_key" ON "ApplicationRole"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_applicationRoleId_fkey" FOREIGN KEY ("applicationRoleId") REFERENCES "ApplicationRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalWorkFlow" ADD CONSTRAINT "ApprovalWorkFlow_approvalWorkFlowConfigurationId_fkey" FOREIGN KEY ("approvalWorkFlowConfigurationId") REFERENCES "ApprovalWorkFlowConfiguration"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalWorkflowApplicationRole" ADD CONSTRAINT "ApprovalWorkflowApplicationRole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ApplicationRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalWorkflowApplicationRole" ADD CONSTRAINT "ApprovalWorkflowApplicationRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalWorkflowApplicationRole" ADD CONSTRAINT "ApprovalWorkflowApplicationRole_aWFId_fkey" FOREIGN KEY ("aWFId") REFERENCES "ApprovalWorkFlow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalWorkflowApplicationRoleConfiguration" ADD CONSTRAINT "ApprovalWorkflowApplicationRoleConfiguration_aWFCId_fkey" FOREIGN KEY ("aWFCId") REFERENCES "ApprovalWorkFlowConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApprovalWorkflowApplicationRoleConfiguration" ADD CONSTRAINT "ApprovalWorkflowApplicationRoleConfiguration_applicationRo_fkey" FOREIGN KEY ("applicationRoleId") REFERENCES "ApplicationRole"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "ApplicationRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_customerRemittaInformationId_fkey" FOREIGN KEY ("customerRemittaInformationId") REFERENCES "CustomerRemittaInformation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisbursementApproval" ADD CONSTRAINT "DisbursementApproval_loanRequestId_fkey" FOREIGN KEY ("loanRequestId") REFERENCES "LoanRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FailedPaymentAttempts" ADD CONSTRAINT "FailedPaymentAttempts_repaymentScheduleId_fkey" FOREIGN KEY ("repaymentScheduleId") REFERENCES "RepaymentSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_kycDetailsId_fkey" FOREIGN KEY ("kycDetailsId") REFERENCES "KycDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_salaryDetailsId_fkey" FOREIGN KEY ("salaryDetailsId") REFERENCES "SalaryDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_proofOfAddressId_fkey" FOREIGN KEY ("proofOfAddressId") REFERENCES "ProofOfAddress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_loanDetailsId_fkey" FOREIGN KEY ("loanDetailsId") REFERENCES "LoanDetails"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LoanRequest" ADD CONSTRAINT "LoanRequest_aWFId_fkey" FOREIGN KEY ("aWFId") REFERENCES "ApprovalWorkFlow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepaymentSchedule" ADD CONSTRAINT "RepaymentSchedule_loanRequestId_fkey" FOREIGN KEY ("loanRequestId") REFERENCES "LoanRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
