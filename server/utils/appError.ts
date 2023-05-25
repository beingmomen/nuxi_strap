interface ErrorObject {
  code: number;
  msg: string;
}

export const appError = (error: ErrorObject) => {

  console.warn('error', error);
  throw createError({ statusCode: error.code, statusMessage: error.msg })

}
