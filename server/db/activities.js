import { client, Prisma } from ".";

export const upsertActivity = async (activityData, id) => {
  try {
    const data = {
      ...activityData,
    };

    const activity = await client.activity.upsert({
      where: {
        id,
      },
      update: data,
      create: data,
    });

    if (activity) {
      return activity;
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

export const updateActivity = async (id, activityData) => {
  try {
    const data = {
      ...activityData,
    };

    const activity = await client.activity.update({
      where: {
        id,
      },
      data,
    });

    if (activity) {
      return activity;
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

export const getAllActivities = () => {
  return client.activity.findMany();
};

export const getActivity = async (id) => {
  try {
    const activity = await client.activity.findUnique({
      where: {
        id,
      },
    });

    if (activity) {
      return activity;
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

export const deleteActivity = (id) => {
  return client.activity.delete({
    where: {
      id: id,
    },
  });
};

// export const getUserById = (id) => {
//   return client.user.findUnique({
//     where: {
//       id,
//     },
//   });
// };
