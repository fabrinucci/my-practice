// Load environment variables
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import fs from 'node:fs'

const SECRET = process.env.SECRET;
const ONE_MINUTE_IN_MS = 60 * 1000;
const PRIVATE_KEY_PATH = process.env.PRIVATE_KEY_PATH;
const PUBLIC_KEY_PATH = process.env.PUBLIC_KEY_PATH;

export const signToken = (user) => {
  const payload = {
    sub: user.id,
    name: user.fullname,
    exp: Date.now() + ONE_MINUTE_IN_MS,
  }

  if(PRIVATE_KEY_PATH) {
    const private_key = fs.readFileSync(PRIVATE_KEY_PATH, 'utf8');
    return jwt.sign(payload, private_key, { algorithm: 'RS256'});
  }

  return jwt.sign(payload, SECRET);
};

export const verifyToken = (token) => {

  if(PUBLIC_KEY_PATH) {
    const public_key = fs.readFileSync(PUBLIC_KEY_PATH, 'utf8');
    return jwt.sign(payload, public_key);
  }

  return jwt.verify(token, SECRET);
};

export const validateExpiration = (payload) => {
  if (Date.now() > payload.exp) {
    throw new Error("Token expired");
  }
};
