import { client, Prisma } from ".";
import bcrypt from "bcrypt";

export const createUser = async (userData) => {
  try {
    const data = {
      ...userData,
      password: bcrypt.hashSync(userData.password, 12),
      passwordConfirm: bcrypt.hashSync(userData.passwordConfirm, 12),
    };

    const user = await client.user.create({ data });

    if (user) {
      return user;
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      const code = e.code;
      const key = e.meta.target.split("_")[1];
      // The .code property can be accessed in a type-safe manner
      if (code === "P2002") {
        return appError({
          msg: `This ${key} exist, Try another one `,
          code: 409,
        });
      }
    }
  }
};

export const getUserByEmail = (email) => {
  return client.user.findUnique({
    where: {
      email,
    },
  });
};
export const getUserById = (id) => {
  return client.user.findUnique({
    where: {
      id,
    },
  });
};
