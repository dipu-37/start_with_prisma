import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const update = async () => {
    // update post
    // const updatePost = await prisma.post.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         title: "Updated Post Title",
    //         content: "Updated content for post 1",
    //         published: true
    //     }
    // });
    // console.log(updatePost);

    const updateMany = await prisma.post.updateMany({
        where: {
            published: false
        },
        data: {
            published: true
        }
    });
};
update();
