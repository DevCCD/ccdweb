const CE_forma = (props) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 23.65'>
			<defs>
				<style>{".ce_forma-3{fill:none}"}</style>
			</defs>
			<g id='ce_2' data-name='ce 2'>
				<g id='ce_3' data-name='ce 3'>
					<path
						d='M20 10a10 10 0 0 1-10 10V0a10 10 0 0 1 10 10Z'
						transform='translate(0 1.83)'
						style={{
							fillRule: "evenodd",
							fill: props.fillRight || "#00b050",
						}}
					/>
					<path
						d='M10 0v20a10 10 0 0 1 0-20Z'
						transform='translate(0 1.83)'
						style={{
							fill: props.fillLeft || "#7030a0",
							fillRule: "evenodd",
						}}
					/>
					<path
						className='ce_forma-3'
						d='M10 1.83V0M10 23.65v-1.82'
					/>
				</g>
			</g>
		</svg>
	);
};

export default CE_forma;
