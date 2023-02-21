/** @format */

import { article, PrismaClient, spreads } from "@prisma/client";

const prisma = new PrismaClient();

export async function getFrontpageArticles() {
	const curr = new Date();
	let month = curr.getMonth() + 2;
	let year = curr.getFullYear();

	let articles: Record<string, article[]> = { "news-features": [], opinions: [], "arts-entertainment": [], sports: [] };
	const categories = Object.keys(articles);
	let restart = true;

	await prisma.$connect();

	while (restart) {
		month--;
		for (let i = 0; i < categories.length; i++) {
			let temp = await prisma.article.findMany({
				where: {
					year: year,
					month: month,
					category: categories[i],
					published: true,
				},
			});

			articles[categories[i]] = temp;
		}

		if (month === 0) {
			month = 12;
			year--;
		}

		restart = articles[categories[0]].length === 0;
	}

	prisma.$disconnect();

	return articles;
}

export async function getPublishedArticles() {
	await prisma.$connect();

	const articles = await prisma.article.findMany({
		where: {
			published: true,
		},
	});

	prisma.$disconnect();

	return articles;
}

export async function getArticle(year: string, month: string, cat: string, slug: string) {
	await prisma.$connect();

	const article = await prisma.article.findFirst({
		where: {
			year: parseInt(year),
			month: parseInt(month),
			category: cat,
			title: decodeURI(slug),
			published: true,
		},
	});

	prisma.$disconnect();

	return article;
}

export async function getCurrArticles() {
	await prisma.$connect();

	const curr = new Date();
	let month = curr.getMonth() + 1;
	let year = curr.getFullYear();

	let articles = await getArticlesByDate(curr.getFullYear().toString(), (curr.getMonth() + 1).toString());
	while (articles.length === 0) {
		month--;
		if (month === 0) {
			month = 12;
			year--;
		}
		articles = await getArticlesByDate(year.toString(), month.toString());
	}

	prisma.$disconnect();

	return articles;
}

export async function getArticlesByDate(year: string, month: string) {
	const curr = new Date();

	await prisma.$connect();

	const articles = await prisma.article.findMany({
		where: {
			year: parseInt(year),
			month: parseInt(month),
			published: true,
		},
	});

	prisma.$disconnect();

	return articles;
}

export async function getArticlesByCategory(cat: string) {
	await prisma.$connect();

	const articles = await prisma.article.findMany({
		orderBy: [
			{
				month: "desc",
			},
			{
				year: "desc",
			},
		],
		where: {
			category: cat,
			published: true,
		},
	});

	prisma.$disconnect();

	return articles;
}

export async function getArticlesBySubcategory(subcat: string) {
	await prisma.$connect();

	const articles = await prisma.article.findMany({
		orderBy: [
			{
				year: "desc",
			},
			{
				month: "desc",
			},
		],
		where: {
			subcategory: subcat,
			published: true,
		},
	});

	prisma.$disconnect();

	return articles;
}

export async function getArticlesByAuthor(author: string) {
	await prisma.$connect();

	const articles = await prisma.article.findMany({
		orderBy: [
			{
				month: "desc",
			},
		],
		where: {
			authors: {
				has: decodeURI(author),
			},
			published: true,
		},
	});

	prisma.$disconnect();

	return articles;
}

export async function getSpreadsByCategory(category: string) {
	await prisma.$connect();

	const spreads = await prisma.spreads.findMany({
		where: {
			title: {
				startsWith: category,
			},
		},
	});

	prisma.$disconnect();

	return spreads;
}

export async function getSpread(slug: string) {
	await prisma.$connect();

	const spreads = await prisma.spreads.findFirst({
		where: {
			title: decodeURI(slug),
		},
	});

	prisma.$disconnect();

	return spreads;
}
