import { article, PrismaClient } from "@prisma/client";
import { ArticleData } from "~/lib/utils";

const prisma = new PrismaClient();

export async function getFrontpageArticles() {
	await prisma.$connect();

	// TODO: fix frontpage collection to array of strings with ID, then do npx prisma db pull and npx generate
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

export async function getArticle(cat: string, slug: string) {
	await prisma.$connect();

	const article = await prisma.article.findFirst({
		where: {
			category: cat,
			title: decodeURI(slug),
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

	const data: ArticleData = {
		slug: cat,
		articles: articles,
	};

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

	const data: ArticleData = {
		slug: subcat,
		articles: articles,
	};

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

	const data: ArticleData = {
		slug: author,
		articles: articles,
	};

	return data;
}
