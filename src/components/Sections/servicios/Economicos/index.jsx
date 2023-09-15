import { DualGrid } from "../../../Grid";
import Section from "../../../Section";
import styles from "./styles/economicos.module.css";

const EEconmicosSection = ({ idioma }) => {
	const mainList = [
		{
			es: "Estudio sobre beneficios de la minería en Perú.",
			en: "Study on the benefits of mining in Peru.",
		},
		{
			es: "Estudio sobre el desarrollo regional y nacional del Cinturón de cobre del Norte del Perú.",
			en: "Study on regional and national development of the North Peruvian Copper Belt.",
		},
		{
			es: "Diseño y elaboración de indicadores estratégicos de competitividad e impacto de la Minería Peruana.",
			en: "Design and elaboration of strategic indicators of competitiveness and impact of Peruvian Mining.",
		},
		{
			es: "Elaboración de indicadores y propuestas para mejorar la competitividad de la industria exportadora No tradicional.",
			en: "Elaboration of indicators and proposals to improve the competitiveness of the non-traditional export industry.",
		},
		{
			es: "Análisis sobre la potencialidad económica de la región San Martín.",
			en: "Analysis on the economic potential of the San Martín region.",
		},
	];
	return (
		<Section id='estudios-economicos'>
			<div className='wrapper container'>
				<div className={styles.content}>
					<DualGrid
						image='https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1673375567/ccd-web/servicios/estudios_economicos_reom3a'
						reverse
						title={
							idioma === "es"
								? "Desarrollo Económico"
								: "Economic Development"
						}
					>
						{mainList.map((item, index) => (
							<DualGrid.Item key={index}>
								{item[idioma]}
							</DualGrid.Item>
						))}
					</DualGrid>
					<DualGrid
						sstyle={{
							paddingTop: 0,
							alignItems: "center",
						}}
						image='https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1672335749/ccd-web/servicios/service3_gge4xt'
						title={
							idioma === "es"
								? "Sostenibilidad institucional"
								: "Institutional sustainability"
						}
					>
						<DualGrid.Item>
							{idioma === "es"
								? "Elaboración de Manuales de Continuidad para la Superintendencia de Mercado de Valores: Planes de Continuidad del negocio y seguridad de información, y manuales de Política de Inversiones, procedimientos administrativos, financieros."
								: "Elaboration of Continuity Manuals for the Superintendence of the Stock Market: Business Continuity and Information Security Plans, and Investment Policy, Administrative and Financial Procedures Manuals."}
						</DualGrid.Item>
					</DualGrid>
				</div>
			</div>
		</Section>
	);
};

export default EEconmicosSection;
