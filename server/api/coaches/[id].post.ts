import { deleteCoach, updateCoach } from "../../db/coaches.js";



export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const id = event.context.params.id as string


  // Update item if there is body
  if (body) {
    console.log('id :>> ', id);
    const coach = await updateCoach(body, id)
    console.warn('coach', coach);
    return coach
  } else {
    // Delete item if not found body

    const coach = await deleteCoach(id)
    return {
      message: 'Deleted successfully'
    }

  }




}) 