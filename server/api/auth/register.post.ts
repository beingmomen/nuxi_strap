import { createUser } from "../../db/users.js"
import { userTransformer } from "~~/server/transformers/user.js"
import { slug } from "../../utils/slug.js";


export default defineEventHandler(async (event) => {


  const body = await readBody(event)

  // console.warn('body', body);

  const requiredFields = ["name", "email", "password", "passwordConfirm"];

  requiredFields.forEach(f => {
    if (!body[f]) {
      return appError({ msg: `The ${f} field is required`, code: 400 })

    }
  })

  if (body.password !== body.passwordConfirm) {
    return appError({ msg: 'Password doesn\'t match passwordConfirm', code: 400 })
  }

  const textSlug = slug(body.name)

  const user = await createUser({
    email: body.email,
    name: body.name,
    password: body.password,
    passwordConfirm: body.passwordConfirm,
    image: body.image || '~/assets/imgs/user.png',
    country: body.country,
    phone: body.phone,
    slug: textSlug
  })
  return {
    status: "success",
    data: userTransformer(user)
  }
})