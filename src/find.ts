import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
 
  // findFirst or FindFirstOrThrow post by id
  const findFirst = await prisma.post.findFirst({
    where : {
        published : false
    }
  })

  console.log("Single post retrieved:");
  console.log({findFirst});
};
main();
