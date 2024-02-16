import { ApplicationRole, User, Customer } from "@prisma/client";

export interface UserPayload {
  id: string;
  email: string;
  firstName: string;
  LastName: string;
  phoneNumber: string;
  role: ApplicationRole;
  isEmailVerified: Boolean;
  isEnabled: Boolean;
}

declare global {
  namespace Express {
    interface Users extends User {}
  }
}

declare global {
    namespace Express {
      interface Users extends Customer {}
    }
  }

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}