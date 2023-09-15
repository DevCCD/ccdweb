const CheckIcon = (props) => {
	return (
		<svg
			width={props.size || 24}
			height={props.size || 24}
			fill='none'
			viewBox='0 0 24 24'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='m19.5 5.999-10.5 12-4.5-4.5'
				stroke='var(--primary-color)'
				strokeWidth={2.063}
				strokeMiterlimit={10}
				strokeLinecap='square'
			/>
		</svg>
	);
};

export default CheckIcon;
