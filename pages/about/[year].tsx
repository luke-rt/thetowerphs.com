import Head from "next/head";

interface Props {
	year: number,
}

interface Params {
	params: {
		year: number,
	}
}

export function getServerSideProps({ params }: Params) {
	return {
		props: {
			year: params.year,
		},
	};
}

export default function Year({ year }: Props) {
	// about pages
	return(
		<div className="about">
			<Head>
				<title>About the {year} staff | The Tower</title>
				<meta
					property="og:title"
					content="About | The Tower"
				/>
				<meta
					property="og:description"
					content="About the Tower"
				/>
			</Head>
			<style jsx>{`
				.about {
					max-width: 85vw;
				}
				h1 {
					text-align: center;
				}
			`}</style>
			<h1>About</h1>
		</div>
	);
}
