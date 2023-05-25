import bcrypt from "bcrypt";
import { getUserByEmail } from "../../db/users.js";
import { userTransformer } from "~~/server/transformers/user.js";
import { generateTokens, sendToken } from "../../utils/jwt.js";

export default defineEventHandler(async (event) => {
  const body = await readBody(event)


  // 1) Check if email and password exist
  const requiredFields = ["email", "password"];
  requiredFields.forEach(f => {
    if (!body[f]) {
      return appError({ msg: `Invalid params`, code: 400 })
    }
  })

  // 2) Check if user exists && password is correct
  const user = await getUserByEmail(body.email);

  if (!user) {
    return appError({ msg: `Username or password is invalid`, code: 400 })
  }

  const doesThePasswordMatch = await bcrypt.compare(body.password, user.password);

  if (!doesThePasswordMatch) {
    return appError({ msg: `Username or password is invalid`, code: 400 })
  }

  const { accessToken } = generateTokens(user);

  sendToken(event, accessToken);

  return {
    token: accessToken,
    status: "success",
    data: userTransformer(user),
  }

}) 