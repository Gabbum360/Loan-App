//setApprovalFlowApplicationRole.


// public ApprovalWorkflow SetApproval(List<ApprovalWorkflowApplicationRole> roles, ApprovalWorkflowApplicationRole role, Guid approvedBy, LoanRequest loanRequest)
// {
//     var isLast = Trivista.LoanApp.ApplicationCore.Entities.ApprovalWorkflowApplicationRole.IsLastApproval(roles, this.Id);
//     if (isLast)
//     {
//         role.Approve(approvedBy);
//         IsApproved = true;
//         DateApproved = DateTime.UtcNow;
//         loanRequest.ApproveLoan();
//     }
//     else
//     {
//         role.Approve(approvedBy);
//     }
//     return this;
// }