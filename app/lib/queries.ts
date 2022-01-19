import { article, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getDataTest() {
  await prisma.$connect();
  const articles: article[] = await prisma.article.findMany({
    where: { published: true },
  })

  prisma.$disconnect();
  console.log(articles)
  return articles;
}
