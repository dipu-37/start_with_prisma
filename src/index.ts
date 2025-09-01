
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();




const main = async () => {
//   const result = await prisma.post.create({
//     data: {
//       title: 'New Post',
//       content: 'This is a new post',
//       authorName: 'Author Name',
//     },
//   });

const result = await prisma.post.findMany();
console.log('Posts retrieved:');
console.log(result);
};
main();
