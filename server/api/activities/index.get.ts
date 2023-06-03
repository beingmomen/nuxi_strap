import { getAllActivities } from "../../db/activities.js";


export default defineEventHandler(async (event) => {



  const activities = await getAllActivities()

  return activities




}) 