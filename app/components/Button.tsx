import { Link } from "remix";

interface Props {
  name: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any;
}

export default function Button({name, href, children}: Props) {
	if(children) {
		return(
			<div className="dropdown" style={{display: "inline-block"}}>
				<Link to={href} className="btn">{ name }</Link>
				<div className="content">
					{children}
				</div>
			</div>
		);
	}

	return(
		<div className="dropdown" style={{display: "inline-block"}}>
			<Link to={href} className="btn">{ name }</Link>
		</div>
	);
}
