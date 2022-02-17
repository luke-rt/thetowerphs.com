import Link from "next/link";

interface Props {
  name: string;
  href: string;
  children?: any;
}

export default function Button({name, href, children}: Props) {
	if(children) {
		return(
			<div className="dropdown" style={{display: "inline-block"}}>
				<Link href={href}>
					<a className="btn">{name}</a>
				</Link>
				<div className="content">
					{children}
				</div>
			</div>
		);
	}

	return(
		<div className="dropdown" style={{display: "inline-block"}}>
			<Link href={href}>
				<a className="btn">{name}</a>
			</Link>
		</div>
	);
}
