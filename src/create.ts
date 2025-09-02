

import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create many users
  // const createMany = await prisma.user.createMany({
  //   data: [
  //     {
  //       username: "user1",
  //       email: "user1@example.com",
  //       role: UserRole.user
  //     },
  //     {
  //       username: "user2",
  //       email: "user2@example.com",
  //       role: UserRole.user
  //     }
  //   ]
  // });
  // console.log("Create Many Users:", createMany);

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is user1's bio",
  //     userId : 1
  //   }
  // });
  // console.log("Create Profile:", createProfile);


// const createCategories = await prisma.category.createMany({
//   data: [
//     { name: "Category 1" },
//     { name: "Category 2" }
//   ]
// });
// console.log("Create Categories:", createCategories);


// const createPost = await prisma.post.create({
//   data: {
//     title: "Post Title",
//     content: "Post Content",
//     authorId: 1,
//     categories: {
//       create: [
//         { category: { connect: { id: 1 } } },
//         { category: { connect: { id: 2 } } }
//       ]
//     }
//   },
//   include: {
//     author: true,
//     categories: {
//       include: {
//         category: true
//       }
//     }
//   }
// });
// console.log("Create Post:", createPost);

};
main();
