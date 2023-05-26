



export default defineEventHandler(async (event) => {
  // const token = getCookie(event, "jwt");

  setCookie(event, 'jwt', '')



  return {
    statusMessage: 'success',
    statusCode: 200,
    status: true
  }
}) 