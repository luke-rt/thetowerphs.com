import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPostsTest() {
  await prisma.$connect();
  const articles = await prisma.article.findMany();

  prisma.$disconnect();
  console.log(articles)
  return articles;
}
