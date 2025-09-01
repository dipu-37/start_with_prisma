import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const upsert = async () => {
    const upsertPost = await prisma.post.upsert({
        where: {
            id: 3
        },
        update: {
            title: "Updated Post Title",
            content: "Updated content for post 3",
            published: true
        },
        create: {
            title: "New Post Title",
            content: "Content for new post",
            published: false
        }
    });
    console.log(upsertPost);
};

upsert();
