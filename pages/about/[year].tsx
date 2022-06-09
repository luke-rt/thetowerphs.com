/** @format */

import Head from "next/head";
import Link from "next/link";
import CreditLink from "~/components/credit.client";

type Member = {
	name: string;
	position: string;
};

type Section = {
	name: string;
	members: Member[];
};

interface Props {
	year: number;
	sections: Section[];
}

interface Params {
	params: {
		year: string;
	};
}

export async function getStaticPaths() {
	return {
		paths: [
			{
				params: {
					year: "2022",
				},
			},
		],
		fallback: false,
	};
}

export async function getStaticProps({ params }: Params) {
	let data = await import(`~/content/${params.year}.json`);
	let sections: Section[] = data.sections;
	return {
		props: {
			year: params.year,
			sections: sections,
		},
	};
}

export default function Year({ year, sections }: Props) {
	return (
		<div className="about">
			<Head>
				<title>About the {year} staff | The Tower</title>
				<meta property="og:title" content={`About the ${year} staff | The Tower`} />
				<meta property="og:description" content={`About the ${year} staff of the Tower`} />
			</Head>
			<style jsx>{`
				.about {
					max-width: 85vw;
				}
				h1 {
					text-align: center;
				}
				h2 {
					margin-top: 4vh;
					margin-bottom: 1vh;
				}
				p {
					font-size: larger;
				}
			`}</style>
			<h1>About the {year} Staff</h1>
			{sections.map((section, index) => (
				<>
					<h2 key={index}>{section.name}</h2>
					{section.members.map((member, index) => (
						<>
							<CreditLink key={index} author={member.name} />
							<span>{member.position}</span>
							<br />
						</>
					))}
				</>
			))}
			<h2>Advisors</h2>
			<p>Lauren King</p>
			<p>Doug Levandowski</p>
		</div>
	);
}
