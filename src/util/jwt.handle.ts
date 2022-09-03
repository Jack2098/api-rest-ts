import { sign, verify, JwtPayload } from 'jsonwebtoken';


const JWT_SECRET = process.env.JWT_SECRET || "token.01010101";

const generateToken = (email: string) : string => {
    const jwt = sign({ email }, JWT_SECRET, {
        expiresIn: "2h"
    });
    return jwt;
}

const verifyToken = (jwt: string) => {
    const isValid = verify(jwt, JWT_SECRET);
    return isValid;
}

export { verifyToken, generateToken }