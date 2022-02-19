import Image from "next/image";
interface Props {
	text: string,
	href: string,
}

export default function VirtualArchive({text, href}: Props) {
	return(
		<div className="virtual-archive">
			<div className="archive-thumbnail">
				<a href={href} target="_blank" rel="noopener noreferrer">
					<Image src="/assets/archive.png" alt="PDF article preview" layout="fill"/>
				</a>
			</div>
			<hr />
			<h2>{text}</h2>
		</div>
	);
}
