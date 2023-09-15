import { DualGrid } from "../../../Grid";
import Section from "../../../Section";

const PoliticaSection = ({ idioma }) => {
	const mainList = [
		{
			es: "Elaboración de un marco fiscal de mediano plazo de Guatemala.",
			en: "Elaboration of a medium-term fiscal framework for Guatemala.",
		},
		{
			es: "Políticas públicas para el crecimiento económico de Panamá.",
			en: "Public policies for economic growth in Panama.",
		},
		{
			es: "Política fiscal y reglas para el crecimiento sostenido de Costa Rica.",
			en: "Fiscal policy and rules for sustainable growth in Costa Rica.",
		},
		{
			es: "Regla fiscal y sostenibilidad de las finanzas públicas para República Dominicana.",
			en: "Fiscal rule and sustainability of public finances for the Dominican Republic.",
		},
		{
			es: "Actualización del marco Fiscal de mediano plazo de El Salvador.",
			en: "Update of the medium-term fiscal framework for El Salvador.",
		},
		{
			es: "Diseño de contrato de largo plazo para financiar carreteras en San Martín.",
			en: "Design of long-term contract to finance roads in San Martin.",
		},
	];

	const planesList = [
		{
			es: "TdR para implementación de 3 programas de logros educativos en el provincia de Pisco.",
			en: "TdR for implementation of 3 programs of educational achievements in the province of Pisco.",
		},
		{
			es: "TdRs y fichas técnicas para 4 programas de educación de Pisco.",
			en: "TdRs and technical sheets for 4 education programs in Pisco.",
		},
	];

	return (
		<Section id='politica-y-gestion'>
			<div className='wrapper container'>
				<DualGrid
					reverse
					style={{
						paddingTop: 0,
						alignItems: "center",
					}}
					title={
						idioma === "es"
							? "Gestión y políticas públicas"
							: "Public policy and management"
					}
					image='https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1678484844/ccd-web/servicios/gestion_envtlg'
				>
					{mainList.map((item, index) => (
						<DualGrid.Item key={index}>
							{item[idioma]}
						</DualGrid.Item>
					))}
				</DualGrid>
				<DualGrid
					title={
						idioma === "es"
							? "Elaboración de planes de TdRs"
							: "Elaboration of TdRs plans"
					}
					image='https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1673377731/ccd-web/servicios/flaquita-documents_yues9l'
				>
					{planesList.map((item, index) => (
						<DualGrid.Item key={index}>
							{item[idioma]}
						</DualGrid.Item>
					))}
				</DualGrid>
			</div>
		</Section>
	);
};

export default PoliticaSection;
