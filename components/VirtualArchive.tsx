import Image from "next/image";
interface Props {
	text: string,
	href: string,
}

export default function VirtualArchive({text, href}: Props) {
	return(
		<div className="virtual-archive">
			<a href={href} target="_blank" rel="noopener noreferrer">
				<Image src="/assets/archive.png" alt="PDF article preview"/>
			</a>
			<hr />
			<h2>{text}</h2>
		</div>
	);
}
