const ArrowDownIcon = (props) => {
	return (
		<svg
			width={props.size}
			height={props.size}
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8Z'
				fill={props.fill}
			/>
		</svg>
	);
};

ArrowDownIcon.defaultProps = {
	size: 24,
	fill: "currentColor",
};

export default ArrowDownIcon;
