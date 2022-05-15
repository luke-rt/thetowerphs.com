import Link from "next/link";
import styles from "~/lib/styles";

interface Props {
  name: string;
  href: string;
  children?: any;
}

export default function Button({name, href, children}: Props) {
	return(
		<div className="dropdown">
			<style jsx>{`
				.dropdown {
					position: relative;
					display: inline-block;
					text-decoration: none;
				}
				.dropdown:hover .content {
					display: block;
				}
				.btn {
					color: ${styles.color.background};
					background-color: ${styles.color.primary};
					display: inline-block;
					padding: 15px;
					font-size: x-large;

					transition: .3s ease-in;
				}
				.btn:hover {
						color: ${styles.color.primary};
						background-color: ${styles.color.background};
						display: block;
				}
				.content {
					display: none;
					position: absolute;
					font-size: large;
					padding: 12px;

					min-width: 14vw;
					box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
					z-index: 1;
				}
				.content a:hover{
					cursor: pointer;
					color: #474747;
				}
			`}</style>

			<Link href={href}>
				<a className="btn">{name}</a>
			</Link>
			{children &&
				<div className="content">
					{children}
				</div>
			}
		</div>
	);
}
