import { article, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getArticles() {
  await prisma.$connect();

  const articles: article[] = await prisma.article.findMany();

  prisma.$disconnect();

  return articles;
}

export async function getArticleById(id: string) {
  await prisma.$connect();

  const article = await prisma.article.findFirst({
    where: {
      id: id,
      published: true,
    },
  })
  prisma.$disconnect();

  return article;
}

export async function getArticlesByCategory(cat: string) {
  await prisma.$connect();

  const articles = await prisma.article.findMany({
    where: {
      subcategory: cat,
      published: true,
    },
  })
  prisma.$disconnect();

  return articles;
}
