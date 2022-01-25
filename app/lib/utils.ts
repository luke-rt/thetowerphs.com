import { article } from "@prisma/client";
import startCase from "lodash/startCase";
import camelCase from "lodash/camelCase";

// Irregular category names, ie just converting to Title Case won't resolve it bc of capitalizations, or ampersands, etc
const categories = new Map<string, string>([
	["news-features", "News & Features"],
	["phs-profiles", "PHS Profiles"],
	["cheers-jeers", "Cheers & Jeers"],
	["arts-entertainment", "Arts & Entertainment"],
]);

const months: string[] = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export interface ArticleData {
  slug: string,
  articles: article[],
}

export function expandCategorySlug(slug: string) {
	const expanded = categories.get(slug);
	if(expanded) return expanded;
	return startCase(camelCase(slug));
}

export function displayDate(year: number, month: number) {
	return months[month] + ", " + year;
}
