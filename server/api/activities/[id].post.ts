import { deleteActivity, upsertActivity } from "../../db/activities.js";



export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const id = event.context.params.id as string
  console.log('id :>> ', id);


  // Update item if there is body
  if (body) {
    const activity = await upsertActivity(body, id)
    return activity
  } else {

    // Delete item if not found body


    const activity = await deleteActivity(id)
    return

  }

  console.log('body :>> ', body);



}) 