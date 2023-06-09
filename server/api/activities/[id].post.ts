import { deleteActivity, updateActivity } from "../../db/activities.js";



export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const id = event.context.params.id as string


  // Update item if there is body
  if (body) {
    console.log('id :>> ', id);
    const activity = await updateActivity(body, id)
    console.warn('activity', activity);
    return activity
  } else {
    // Delete item if not found body

    const activity = await deleteActivity(id)
    return {
      message: 'Deleted successfully'
    }

  }




}) 