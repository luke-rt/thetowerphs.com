/** @format */

import Link from "next/link";
import styles from "~/lib/styles";

interface Props {
	name: string;
	href: string;
	children?: any;
}

export default function Button({ name, href, children }: Props) {
	return (
		<div className="dropdown">
			<style jsx>{`
				.dropdown {
					position: relative;
					display: inline-block;
					text-decoration: none;
				}
				.dropdown:hover .content {
					display: block;
					opacity: 1;
				}
				.btn {
					color: ${styles.color.primary};
					background-color: ${styles.color.navbar};
					display: inline-block;
					padding: 15px;
					font-size: large;
					font-weight: bold;

					transition: 0.1s ease-in;
				}
				.btn:hover {
					color: ${styles.color.primary};
					background-color: ${styles.color.background};
					display: block;
				}
				.content {
					display: block;
					position: absolute;
					font-size: large;
					padding: 12px;

					min-width: 14vw;
					box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
					z-index: 1;
					opacity: 0;
					transition: 0.1s ease-in opacity;
				}
				.content a:hover {
					cursor: pointer;
					color: #474747;
				}
			`}</style>
			<Link href={href}>
				<a className="btn">{name}</a>
			</Link>
			{children && <div className="content">{children}</div>}
		</div>
	);
}
