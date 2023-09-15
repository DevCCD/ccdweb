import { Text } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DualGrid } from "../../../Grid";
import CheckIcon from "../../../Icons/CheckIcon";
import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import styles from "./styles/desarrollo.module.css";

const DesarrolloSection = ({ idioma }) => {
	const mainList = [
		{
			es: "Propuestas de desarrollo de las comunidades nativas del Bajo Urubambam,Cusco.",
			en: "Proposals for the development of the native communities of the Bajo Urubambam, Cusco.",
		},
		{
			es: "Plan de Desarrollo de Cotabamba y El Progreso - Apurímac.",
			en: "Development Plan of Cotabamba and El Progreso - Apurímac.",
		},
		{
			es: "Plan de Desarrollo de Megantoni, Cusco.",
			en: "Development Plan of Megantoni, Cusco.",
		},
		{
			es: "Evaluación social e infraestructura minera para el desarrollo de Michiquillay, Cajamarca.",
			en: "Social evaluation and mining infrastructure for the development of Michiquillay, Cajamarca.",
		},
		{
			es: "Estudio de Competitividad Fiscal y Regulatoria técnico ambiental del País.",
			en: "Study of Fiscal and Regulatory Competitiveness of the Country.",
		},
		{
			es: "Propuestas para impulsar el desarrollo del sector minero al 2021.",
			en: "Proposals to promote the development of the mining sector to 2021.",
		},
		{
			es: "Cooperación al Desarrollo Económico Regional - San Martín.",
			en: "Regional Economic Development Cooperation - San Martín.",
		},
		{
			es: "Elaboración de Propuesta de Desarrollo del País Potenciado por la Actividad Minera a través del Clúster Minero.",
			en: "Development Proposal of the Country Potentiated by Mining Activity through the Mining Cluster.",
		},
	];

	const planesYPropuestas = [
		{
			es: "Evaluación del mercado eco sistémicos en la Amazonía Peruana.",
			en: "Evaluation of the eco-systemic market in the Peruvian Amazon.",
		},
		{
			es: "Puesta en operación de núcleos ejecutores: GORE Loreto.",
			en: "Operation of executive cores: GORE Loreto.",
		},
		{
			es: "Orientación de la intervención económica de la Asociación Savia para el periodo 2012-2015.",
			en: "Guidance of the economic intervention of the Savia Association for the period 2012-2015.",
		},
		{
			es: "Estudio del sector de recursos naturales no renovables de América Latina.",
			en: "Study of the non-renewable natural resources sector of Latin America.",
		},
		{
			es: "Plan de Inversión Social Estratégica en Pisco, Ica.",
			en: "Strategic Social Investment Plan in Pisco, Ica.",
		},
		{
			es: "Conferencia Anual de Ejecutivos (CADE) 2010.",
			en: "Annual Conference of Executives (CADE) 2010.",
		},
	];

	const planesdeCompetitividad = [
		{
			es: "Estudio de Competitividad de minería del Perú.",
			en: "Study of the competitiveness of mining in Peru.",
		},
		{
			es: "Plan de Competitividad de Moquegua, Loreto, Piura(Sechura) y Apurímac.",
			en: "Competitiveness Plan of Moquegua, Loreto, Piura (Sechura) and Apurímac.",
		},
	];

	return (
		<Section id='nosotros_about'>
			<div className='wrapper container'>
				<div className={styles.content}>
					<DualGrid
						style={{
							paddingTop: 0,
							alignItems: "center",
						}}
						reverse
						image={
							"https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1678470932/ccd-web/servicios/desarrollo_compt_u4iltq.jpg"
						}
						title={
							idioma
								? "Elaboración de planes de desarrollo"
								: "Development plans"
						}
					>
						{mainList.map((item, index) => (
							<DualGrid.Item key={index}>
								{item[idioma]}
							</DualGrid.Item>
						))}
					</DualGrid>
					<DualGrid
						reverse
						// image={
						// 	"https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1673367385/ccd-web/servicios/trabajo_nauisd.png"
						// }
						rightComponent={
							<div>
								<h3 className={styles.servicioTitle}>
									{idioma === "es"
										? "Elaboración de planes de competitividad"
										: "Competitiveness plans"}
								</h3>
								{planesdeCompetitividad.map((item, index) => (
									<DualGrid.Item key={index}>
										{item[idioma]}
									</DualGrid.Item>
								))}
							</div>
						}
					>
						<h3 className={styles.servicioTitle}>
							{idioma === "es"
								? "Planes y propuestas sociales"
								: "Social plans and proposals"}
						</h3>
						{planesYPropuestas.map((item, index) => (
							<DualGrid.Item key={index}>
								{item[idioma]}
							</DualGrid.Item>
						))}
					</DualGrid>
				</div>
			</div>
		</Section>
	);
};

export default DesarrolloSection;
