
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
 // fluent api
  // const user = await prisma.user.findUnique({
  //   where: { id: 1 },
  //   include:{
  //     posts: true
  //   }
  // });
  // console.log("users:", user);


  // const publishedPost = await prisma.user.findMany({
  //   include: {
  //     posts:{
  //       where : {
  //         published : true
  //       }
  //     }
  //   }
  // });
  // console.dir( publishedPost,{ depth: null });


const post = await prisma.post.findMany({
  where: {
    AND: [
      {
        published: true
      },
      {
        title: {
          contains: "Title"
        }
      }
    ]
  }
});

console.log("Published Posts with 'title' in title:", post);
}
main();
