const GmailIcon = (props) => {
	return (
		<svg
			width={props.size}
			height={props.size}
			fill='none'
			viewBox='0 0 134 100'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				d='M9.09 100h21.213V48.485L0 25.758v65.151C0 95.94 4.076 100 9.09 100Z'
				fill='#4285F4'
			/>
			<path
				d='M103.03 100h21.212a9.088 9.088 0 0 0 9.091-9.09V25.757L103.03 48.485'
				fill='#34A853'
			/>
			<path
				d='M103.03 9.09v39.395l30.303-22.727V13.636c0-11.242-12.833-17.651-21.818-10.909'
				fill='#FBBC04'
			/>
			<path
				d='M30.303 48.485V9.09l36.364 27.273L103.03 9.09v39.394L66.667 75.758'
				fill='#EA4335'
			/>
			<path
				d='M0 13.636v12.122l30.303 22.727V9.09l-8.485-6.364C12.818-4.015 0 2.394 0 13.637'
				fill='#C5221F'
			/>
		</svg>
	);
};

GmailIcon.defaultProps = {};

export default GmailIcon;
