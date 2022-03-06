import Link from "next/link";

interface Props {
	author: string;
}

export default function CreditLink({ author }: Props) {
	return <Link href={ "/credit/" + encodeURI(author) }>{author}</Link>;
}
