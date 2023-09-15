import { Link as LinkScroll } from "react-scroll";

const LinkScrollCustom = ({ to, className, offset, children, as }) => {
	return (
		<LinkScroll
			as={as}
			to={to}
			smooth={true}
			duration={400}
			className={className}
			spy={true}
			offset={offset || -50}
		>
			{children}
		</LinkScroll>
	);
};
export default LinkScrollCustom;
