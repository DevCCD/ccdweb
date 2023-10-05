import { DualGrid } from "../../../Grid";
import Section from "../../../Section";

const InversionesSection = ({ idioma }) => {
	const iniciativasList = [
		{
			es: "Prestación de servicios de seguridad tecnológica en las prisiones(Bloqueo de celulares).",
			en: "Provision of security services in prisons (blocking of cell phones).",
		},
		{
			es: "Vigilancia electrónica personal(Grilletes electrónicos).",
			en: "Electronic personal surveillance (electronic shackles).",
		},
	];

	const talleresList = [
		{
			es: "Taller de obras por impuesto en: ",
			en: "Workshop on tax work in: ",
		},
		{
			es: "Sechura (Piura)",
			en: "Sechura (Piura)",
		},
		{
			es: "Loreto",
			en: "Loreto",
		},
		{
			es: "Apurímac",
			en: "Apurimac",
		},
		{
			es: "Echarati (Cusco)",
			en: "Echarati (Cusco)",
		},
		{
			es: "La Convención (Cusco)",
			en: "La Convencion (Cusco)",
		},
	];

	const obrasxInpuestosList = [
		{
			es: "Gobierno regional y municipios de Ancash por S./336 millones (edificaciones, saneamiento, salud y vial)",
			en: "Regional and municipal governments of Ancash for S./336 million (buildings, sanitation, health and road)",
		},
		{
			es: "Provincia de Mariscal Nieto, Moquegua(instalación del sistema de agua potable y alcantarillado).",
			en: "Province of Mariscal Nieto, Moquegua (installation of the water supply and sewerage system).",
		},
		{
			es: "Gobierno regional de Moquegua y municipalidades de la región.",
			en: "Regional government of Moquegua and municipalities of the region.",
		},
		{
			es: "Estructuración de un mecanismo para financiar proyectos de inversión pública en la región Apurímac.",
			en: "Structuring a mechanism to finance public investment projects in the Apurímac region.",
		},
	];

	const estudiosPreinversionList = [
		{
			es: "Elaboración de 5 expedientes técnicos de PIP de colegio (Ayacucho).",
			en: "Preparation of 5 technical files of PIP of school (Ayacucho).",
		},
		{
			es: "Estudios de preinversión y expediente técnico Logros de Aprendizaje (Megantoni).",
			en: "Preinvestment studies and technical file Logros de Aprendizaje (Megantoni).",
		},
		{
			es: "Reformulación de 17 estudios de preinversión (Challhuahuacho).",
			en: "Reformulation of 17 preinvestment studies (Challhuahuacho).",
		},
		{
			es: "Elaboración de TdRs de 3 programas de logros educativos (Pisco).",
			en: "Preparation of TdRs of 3 programs of educational achievements (Pisco).",
		},
		{
			es: "Elaboración de TdRs-Fichas Técnicas de 4 programas de educación (Pisco).",
			en: "Preparation of TdRs-Fichas Técnicas of 4 education programs (Pisco).",
		},
		{
			es: "Estructuras de mecanismo para financiar proyectos de inversión pública - Apurímac.",
			en: "Structures of mechanism to finance public investment projects - Apurímac.",
		},
		{
			es: "Revisión de expedientes técnicos de obras en IE-Puno.",
			en: "Review of technical files of works in IE-Puno.",
		},
	];

	return (
		<Section id={"inversiones"}>
			<div className='wrapper container'>
				<DualGrid
					reverse
					style={{
						paddingTop: 0,
						alignItems: "center",
					}}
					title={
						idioma === "es"
							? "Iniciativas Privadas (asesorías)"
							: "Private Initiatives (consulting)"
					}
					image='https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1672335749/ccd-web/servicios/service4_ljezkq'
				>
					{iniciativasList.map((item, index) => (
						<DualGrid.Item key={index}>
							{item[idioma]}
						</DualGrid.Item>
					))}
					<DualGrid.Title
						css={{
							marginTop: "2rem",
						}}
					>
						{idioma === "es" ? "Talleres" : "Workshops"}
					</DualGrid.Title>
					{talleresList.map((item, index) => (
						<DualGrid.Item key={index}>
							{item[idioma]}
						</DualGrid.Item>
					))}
				</DualGrid>
				<DualGrid
					reverse
					title={
						idioma === "es"
							? "Obras por impuestos: Asistencia técnica especializada"
							: "Works by taxes: Specialized technical assistance"
					}
					rightComponent={
						<div>
							<DualGrid.Title>
								{idioma === "es"
									? "Estudios de preinversión y definitivos"
									: "Preinvestment and final studies"}
							</DualGrid.Title>
							{estudiosPreinversionList.map((item, index) => (
								<DualGrid.Item key={index}>
									{item[idioma]}
								</DualGrid.Item>
							))}
						</div>
					}
				>
					{obrasxInpuestosList.map((item, index) => (
						<DualGrid.Item key={index}>
							{item[idioma]}
						</DualGrid.Item>
					))}
				</DualGrid>
			</div>
		</Section>
	);
};

export default InversionesSection;
