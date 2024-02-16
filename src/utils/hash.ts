//import bcrypt from "bcrypt";
import crypto from "crypto";

export function hashPassword(password: string){
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");

    return {hash, salt};
}

export function veryfyPassword({userPassword, salt, hash}: {
    userPassword: string,
    salt: string,
    hash: string
}){
    const hashed = crypto.pbkdf2Sync(userPassword, salt, 1000, 64, "sha512")
    .toString("hex");
    return hashed === hash;
}

// export class Password {
//     //hash password
//   static async toHash(password: string) {
//     const saltWorkFactor: number = parseInt(
//       <string>process.env.SALT_WORK_FACTOR
//     );
//     const salt = await bcrypt.genSalt(saltWorkFactor);
//     return await bcrypt.hash(password, salt);
//   }
//   //verify password
//   static async comparePassword(password: string, hashedPassword: string) {
//     return await bcrypt.compare(password, hashedPassword);
//   }
// }
