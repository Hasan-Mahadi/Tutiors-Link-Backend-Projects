// import jwt, { JwtPayload } from 'jsonwebtoken';

// export const createToken = (
//   jwtPayload: { userId: string; role: string },
//   secret: string,
//   expiresIn: string,
// ) => {
//   return jwt.sign(jwtPayload, secret, {
//     expiresIn,
//   });
// };

// export const verifyToken = (token: string, secret: string) => {
//   return jwt.verify(token, secret) as JwtPayload;
// };


import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';
import ms from 'ms';  

export const createToken = (
  jwtPayload: { userId: string; role: string },
  secret: string,
  expiresIn: string, // e.g. '1h', '7d'
) => {
  const options: SignOptions = {
    expiresIn: expiresIn as ms.StringValue, //  
  };

  return jwt.sign(jwtPayload, secret, options);
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};