import { createCoach } from "../../db/coaches.js";
import { slug } from "../../utils/slug.js";



export default defineEventHandler(async (event) => {
  const body = await readBody(event)


  // 1) Check if email and password exist
  const requiredFields = ["name", "image", "date", 'activityId'];

  requiredFields.forEach(f => {
    if (!body[f]) {
      return appError({ msg: `The ${f} is required`, code: 400 })
    }
  })


  const textSlug = slug(body.name)

  const coach = await createCoach({
    name: body.name,
    // image: body.image || '/images/coach.png',
    image: '/images/coach.png',
    slug: textSlug
  })



  // console.warn('coach', coach);
  return {
    status: "success",
    message: 'تم الإضافة بنجاح',
    data: coach
  }




}) 