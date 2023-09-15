import Section from "../../../Section";
import TitleSection from "../../../TitleSection";

const TestimonialsPage = ({ idioma }) => {
	return (
		<Section id={"testimonials"}>
			<div className='wrapper container'>
				<TitleSection
					noTitle
					subtitle={idioma === "es" ? "Conoce" : "know"}
				/>
			</div>
		</Section>
	);
};

export default TestimonialsPage;
