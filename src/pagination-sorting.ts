import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



const paginationSorting = async () => {
    // offset base pagination
    const posts = await prisma.post.findMany({
        skip: 0,
        take: 10,
        orderBy: {
            createdAt: "desc"
        }
    });
    console.log(posts);

    // cursor base pagination 
    const post = await prisma.post.findMany({
        skip: 2,
        cursor: {
            id: 10
        },
        take: 5,
        orderBy: {
            createdAt: "desc"
        }
    });
}

paginationSorting();
