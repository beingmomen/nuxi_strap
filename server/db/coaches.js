import { client, Prisma } from ".";

export const createCoach = async (coachData) => {
  console.warn("test", coachData);
  try {
    const data = {
      ...coachData,
    };

    const coach = await client.coach.create({
      data,
    });

    console.warn("coach", coach);

    if (coach) {
      return coach;
    }
  } catch (e) {
    // console.warn("code", e.message);
    // console.warn("clientVersion", e.clientVersion);
    console.warn("check", e instanceof Prisma.PrismaClientValidationError);
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
    } else if (e instanceof Prisma.PrismaClientValidationError) {
      console.warn("message", e.message);
    }
  }
};

export const updateCoach = async (coachData, id) => {
  try {
    const data = {
      ...coachData,
    };

    const coach = await client.coach.update({
      where: {
        id,
      },
      data,
    });

    if (coach) {
      return coach;
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

export const getAllCoaches = () => {
  return client.coach.findMany();
};

export const getCoach = async (id) => {
  try {
    const coach = await client.coach.findUnique({
      where: {
        id,
      },
    });

    if (coach) {
      return coach;
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      const code = e.code;
      const key = e.meta.message;
      // console.warn("key", key);
      // The .code property can be accessed in a type-safe manner
      // if (code === "P2023") {
      return appError({
        msg: `This ObjectID is no exist`,
        code: 409,
      });
      // }
    }
  }
};

export const deleteCoach = async (id) => {
  try {
    const coach = await client.coach.delete({
      where: {
        id: id,
      },
    });

    if (coach) {
      console.warn("coachyyyyyyyyyy", coach);
      return coach;
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      const code = e.code;
      const key = e.meta.message;
      console.warn("key", key);
      // The .code property can be accessed in a type-safe manner
      if (code === "P2023") {
        return appError({
          msg: `This ObjectID is no exist`,
          code: 409,
        });
      }
    }
  }
};

// export const getUserById = (id) => {
//   return client.user.findUnique({
//     where: {
//       id,
//     },
//   });
// };
