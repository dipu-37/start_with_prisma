import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
 
  // create many post 
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Post 1",
        content: "Content for post 1",
        published: false
      },
      {
        title: "Post 2",
        content: "Content for post 2",
        published: false
      }
    ]
  });
};
main(); 
