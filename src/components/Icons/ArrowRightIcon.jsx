const ArrowRightIcon = (props) => {
	return (
		<svg
			width={32}
			height={24}
			fill='none'
			viewBox='0 0 32 24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='m20.563 5.25 6.75 6.75-6.75 6.75M26.375 12H4.687'
				stroke={props.fill || "currentColor"}
				strokeWidth={props.strokeWidth || 2.25}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	);
};

export default ArrowRightIcon;
