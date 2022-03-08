import Image from "next/image";
import styles from "~/styles/archive.module.scss";

interface Props {
	text: string,
	href: string,
}

export default function VirtualArchive({text, href}: Props) {
	const img = "/assets/archive.png";

	return(
		<div className={styles.archive}>
			<div className={styles.thumbnail}>
				<a href={href} target="_blank" rel="noopener noreferrer">
					<Image src={img} alt="PDF article preview" layout="fill" blurDataURL={img} placeholder="blur" />
				</a>
			</div>
			<hr />
			<h2>{text}</h2>
		</div>
	);
}
