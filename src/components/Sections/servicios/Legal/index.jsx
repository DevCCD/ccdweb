import { DualGrid } from "../../../Grid";
import Section from "../../../Section";

const LegalServiceSection = ({ idioma }) => {
	const reglamentacionList = [
		{
			es: "Decreto legislativo 1334 que crea el Fondo de Adelanto Social (FAS).",
			en: "Legislative Decree 1334 that creates the Social Advance Fund (FAS).",
		},
		{
			es: "Decreto legislativo 1336 que crea el fondo minero.",
			en: "Legislative Decree 1336 that creates the mining fund.",
		},
	];

	const propuestaList = [
		{
			es: "Fideicomiso para Obras, Garantías y repago ante multilaterales.",
			en: "Trust for Works, Guarantees and repayment before multilaterals.",
		},
	];

	const estrategiasList = [
		{
			es: "Estudio y elaboración de un dispositivo legal para remediación de pasivos ambientales a través de impuestos.",
			en: "Study and preparation of a legal device for environmental liabilities remediation through taxes.",
		},
		{
			es: "Diseño de estrategia para conformación de Autoridad Regional de Gestión Ambiental y de RRNN Gore Madre de Dios.",
			en: "Design of strategy for the formation of the Regional Authority for Environmental and Natural Resource Management of the Madre de Dios Region.",
		},
	];

	return (
		<Section id={"legal-section-service-masna-de-todos-los-masnas"}>
			<div className='wrapper container'>
				<DualGrid
					reverse
					title={
						idioma === "es"
							? "Estudios de reglamentación"
							: "Regulation studies"
					}
					rightComponent={
						<div>
							<DualGrid.Title>
								{idioma === "es"
									? "Propuesta legislativa"
									: "Legislative proposal"}
							</DualGrid.Title>
							{propuestaList.map((item, index) => (
								<DualGrid.Item key={index}>
									{item[idioma]}
								</DualGrid.Item>
							))}
						</div>
					}
				>
					{reglamentacionList.map((item, index) => (
						<DualGrid.Item key={index}>
							{item[idioma]}
						</DualGrid.Item>
					))}
				</DualGrid>
				{/* <DualGrid
					image='https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1672335749/ccd-web/servicios/service5_fc6kti'
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
				</DualGrid> */}
				<DualGrid
					reverse
					sstyle={{
						alignItems: "center",
					}}
					image='https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1672335749/ccd-web/servicios/service5_fc6kti'
					title={
						idioma === "es"
							? "Estudios y estrategias legales"
							: "Legal studies and strategies"
					}
				>
					{estrategiasList.map((item, index) => (
						<DualGrid.Item key={index}>
							{item[idioma]}
						</DualGrid.Item>
					))}
				</DualGrid>
			</div>
		</Section>
	);
};

export default LegalServiceSection;
