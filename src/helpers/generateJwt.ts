// import { Request } from "express";
// import jwt from "jsonwebtoken";
// import { UserPayload } from "../../typings/express";

// const secret = process.env.JWT_SECRET || "";
// const expiresIn = process.env.JWT_EXPIRES_IN;

// export const generateJWT = (req: Request, payload: UserPayload) => {
//   const userJWT = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn });

//   //store it on the session object
//   req.headers = {
//     jwt: userJWT,
//   };

//   return userJWT;
// };

// export const verifyToken = (token: string) => {
//   return <jwt.JwtPayload>jwt.verify(token, secret);
// };