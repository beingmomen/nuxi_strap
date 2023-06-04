import { getAllCoaches } from "../../db/coaches.js";


export default defineEventHandler(async (event) => {



  const coaches = await getAllCoaches()

  return coaches




}) 