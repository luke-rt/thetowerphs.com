import Link from "next/link";

import styles from "~/styles/button.module.scss";

interface Props {
  name: string;
  href: string;
  children?: any;
}

export default function Button({name, href, children}: Props) {
	return(
		<div className={styles.dropdown} style={{display: "inline-block"}}>
			<Link href={href}>
				<a className={styles.btn}>{name}</a>
			</Link>
			{children &&
				<div className={styles.content}>
					{children}
				</div>
			}
		</div>
	);
}
