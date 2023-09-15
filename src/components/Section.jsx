const Section = ({ children, id, css }) => {
	return (
		<section id={id} className='section' style={css}>
			{children}
		</section>
	);
};

Section.defaultProps = {
	id: null,
};

export default Section;
