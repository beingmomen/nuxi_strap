
import { getUserById } from "../../db/users.js";
import { validateToken } from "../../utils/jwt.js";

export default defineEventHandler(async (event) => {
  const { token } = await readBody(event)

  // console.warn('body req', token);

  let isValid = null
  let isExist = null


  try {
    isValid = await validateToken(token)
    isExist = await getUserById(isValid.userId)

    return {
      jwt: isValid,
      user: isExist
    }
  } catch (e: unknown) {
    const errorMessage = (e as Error).message;

    return {
      statusCode: 401,
      statusMessage: errorMessage,
    }




  }





}) 