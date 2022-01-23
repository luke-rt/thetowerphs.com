import { article, PrismaClient } from "@prisma/client";
import { ArticleData } from "~/lib/utils";

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
  });

  prisma.$disconnect();

  return article;
}

export async function getArticlesByCategory(cat: string) {
  await prisma.$connect();

  const articles = await prisma.article.findMany({
    where: {
      category: cat,
      published: true,
    },
  });

  prisma.$disconnect();

  let data: ArticleData = {
    slug: cat,
    articles: articles,
  }

  return data;
}

export async function getArticlesBySubcategory(subcat: string) {
  await prisma.$connect();

  const articles = await prisma.article.findMany({
    where: {
      subcategory: subcat,
      published: true,
    },
  });

  prisma.$disconnect();

  let data: ArticleData = {
    slug: subcat,
    articles: articles,
  }

  return data;
}

export async function getArticlesByAuthor(author: string) {
  await prisma.$connect();

  const articles = await prisma.article.findMany({
    where: {
      authors: {
        has: decodeURI(author)
      },
      published: true,
    },
  });

  prisma.$disconnect();

  let data: ArticleData = {
    slug: author,
    articles: articles,
  }

  return data;
}
