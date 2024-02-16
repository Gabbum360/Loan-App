

export function repayableMonthlyIncome (actualCalculateableSalary: number) {
    const repayableMonthlyIncome = (65.0) * actualCalculateableSalary;
    return repayableMonthlyIncome;
};

export function actualCalculateableSalary (monthlySalary: number, averageMonthlyRepayment: number) {
    const actualCalculateableSalary = monthlySalary - averageMonthlyRepayment;
    return actualCalculateableSalary;
};

export function monthlyRepaymentAmount_Interest (interestRate: number, loanAmount: number){
    const monthlyRepaymentAmount_Interest = ((interestRate / 100) * loanAmount);
    return monthlyRepaymentAmount_Interest;
};

export function TotalRepaymentAmount_Interest (interestRate: number, loanAmount: number, tenure: number) 
{
    const totalRepaymentAmount_Interest = ((interestRate / 100) * loanAmount * tenure);
    return totalRepaymentAmount_Interest;
};

export function MonthlyRepaymentAmount_Principal (interestRate: number, loanAmount: number, tenure: number) 
{
    const totalRepaymentAmount_Interest = ((interestRate / 100) * loanAmount * tenure);
    return totalRepaymentAmount_Interest;
};

export function MonthlyRepaymentAmount (monthlyPayableInterest: number, monthlyPayablePrincipalAmount: number) 
{
    const monthlyRepaymentAmount = monthlyPayableInterest + monthlyPayablePrincipalAmount;
    return monthlyRepaymentAmount;
};

export function totalRepaymentAmount (totalPayableInterest: number, totalPayablePrincipalAmount: number) 
{
    const totalRepaymentAmount = totalPayableInterest + totalPayablePrincipalAmount;
    return totalRepaymentAmount;
};


export function setName(name: string)
{
    const nam = name
    return nam;
}
export function setDefault(isDefault: boolean)
{
    const isD = isDefault
    return isD;
}
export function setInterestRate(interestRate: number)
{
    const interest = interestRate
    return interest;
}
export function setMaximumLoanAmount(maxLoanAmount: number)
{
    const maximumLoanAmount = maxLoanAmount
    return maximumLoanAmount;
}
export function setMinimumSalary(minimumSalary: number)
{
    const minimumSalar = minimumSalary
    return minimumSalar;
}
export function setMaximumTenure(maxTenure: number)
{
    const maximumTenure = maxTenure
    return maximumTenure;
}
