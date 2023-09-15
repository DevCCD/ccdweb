const IC_forma = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 20 23.65'
			{...props}
		>
			<defs>
				<style>{".ic-3{fill:none}"}</style>
			</defs>
			<g id='ic_2' data-name='ic 2'>
				<g id='ic_3' data-name='ic 3'>
					<path
						d='M20 10a10 10 0 0 1-10 10V0a10 10 0 0 1 10 10Z'
						transform='translate(0 1.83)'
						style={{
							fillRule: "evenodd",
							fill: "#7030a0",
						}}
					/>
					<path
						d='M10 0v20a10 10 0 0 1 0-20Z'
						transform='translate(0 1.83)'
						style={{
							fill: "#e46c0a",
							fillRule: "evenodd",
						}}
					/>
					<path className='ic-3' d='M10 1.83V0M10 23.65v-1.82' />
				</g>
			</g>
		</svg>
	);
};

export default IC_forma;
