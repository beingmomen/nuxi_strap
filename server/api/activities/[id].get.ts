import { getActivity } from "../../db/activities.js";



export default defineEventHandler(async ({ context }) => {
  const id = context.params.id as string


  const activity = await getActivity(id)

  return {
    data: activity
  }

}) 