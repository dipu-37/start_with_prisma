import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
 
  // findFirst or FindFirstOrThrow post by id
  const findFirst = await prisma.post.findFirst({
    where : {
        published : false
    }
  })

  // findUnique or FindUniqueOrThrow post by id
  const findUnique = await prisma.post.findUnique({
    where: {
      id: 1
    },
    select:{
      id: true,
      title: true,
      content: true,
      published: true
    }
  })

  console.log("Single post retrieved:");
  console.log({findUnique});
};
main(); 
