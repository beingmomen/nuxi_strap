import { upsertActivity } from "../../db/activities.js";
import { slug } from "../../utils/slug.js";



export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // console.log('body :>> ', body);


  // 1) Check if email and password exist
  const requiredFields = ["name", "image"];

  requiredFields.forEach(f => {
    if (!body[f]) {
      return appError({ msg: `The ${f} is required`, code: 400 })
    }
  })


  const textSlug = slug(body.name)

  const activity = await upsertActivity({
    name: body.name,
    // image: body.image || '/images/activity.png',
    image: '/images/activity.png',
    slug: textSlug
  })


  // console.warn('activity', activity);
  return {
    status: "success",
    message: 'تم الإضافة بنجاح',
    data: activity
  }




}) 