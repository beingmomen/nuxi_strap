import { getCoach } from "../../db/coaches.js";



export default defineEventHandler(async ({ context }) => {
  const id = context.params.id as string


  const coach = await getCoach(id)

  return {
    data: coach
  }

}) 