import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import styles from "./styles/about.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import CheckIcon from "../../../Icons/CheckIcon";
import { Text } from "@nextui-org/react";
import { GlobeLarge } from "../../../Globe";

const AboutSection = ({ idioma }) => {
	const Servicio = ({ title, children, image, reverse, component }) => {
		return (
			<div
				className={
					reverse
						? `${styles.servicio} ${styles.reverse}`
						: `${styles.servicio}`
				}
			>
				{component ? (
					component
				) : (
					<motion.div
						className={styles.servicioImage}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.65, delay: 0.5 }}
						viewport={{
							once: true,
							margin: "-10px",
						}}
					>
						<Image
							fill
							src={image}
							alt={
								title
									? `imagen de ${title.toLowerCase()}`
									: "imagen"
							}
							title={
								title
									? `imagen de ${title.toLowerCase()}`
									: "imagen"
							}
							sizes='(max-width: 768px) 100vw, 50vw'
						/>
					</motion.div>
				)}
				<motion.div
					className={styles.servicioInfo}
					initial={{ opacity: 0, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					viewport={{
						once: true,
						margin: "-50px",
					}}
				>
					<div className={styles.servicioDescription}>{children}</div>
				</motion.div>
			</div>
		);
	};

	const Description = ({ children }) => {
		return (
			<div className={styles.description}>
				<div className={styles.icon}>
					<CheckIcon />
				</div>
				<div className={styles.text}>{children}</div>
			</div>
		);
	};

	return (
		<Section id='nosotros_about'>
			<div className='wrapper container'>
				<TitleSection
					noSubtitle={true}
					start
					styleTitle={{
						color: "var(--primary-color)",
					}}
				>
					{idioma === "es"
						? "Sobre nuestro trabajo"
						: "About our work"}
				</TitleSection>
				<div className={styles.content}>
					<Servicio
						reverse
						image={
							"https://res.cloudinary.com/dro4ur0kq/image/upload/f_auto,q_auto/v1680196475/ccd-web/nosotros/about_xulvkn"
						}
						// component={<GlobeLarge />}
					>
						<p>
							{idioma === "es"
								? "En Centro para la Competitividad y el Desarrollo (CCD) nos distinguimos por ser una institución en donde tenemos como objetivo promover la competitividad y el desarrollo del país a través del diseño y el apoyo en la implementación y gestión de políticas públicas. También trabajamos lo relacionado con la atención de la agenda social, medioambiental y promoción de la inversión privada."
								: "Centro para la Competitividad y el Desarrollo (CCD) distinguishes itself as an institution where our goal is to promote the competitiveness and development of the country through the design and support in the implementation and management of public policies. We also work on issues related to the social agenda, environmental and promotion of private investment."}
							<br />
							<br />
							{idioma === "es"
								? "El centro para la Competitividad y el Desarrollo nos enfocamos en la prestación de servicios las cuales comprenden los siguientes:"
								: "The center for Competitiveness and Development focuses on the provision of services which include the following:"}
						</p>
						<div className={styles.list}>
							<Description>
								<p>
									{idioma === "es"
										? "Servicio de Competitividad y Desarrollo"
										: "Competitiveness and Development Service"}
								</p>
							</Description>
							<Description>
								<p>
									{idioma === "es"
										? "Políticas y administración pública"
										: "Public policy and administration"}
								</p>
							</Description>
							<Description>
								<p>
									{idioma === "es"
										? "Estudios Económicos"
										: "Economic Studies"}
								</p>
							</Description>
							<Description>
								<p>
									{idioma === "es"
										? "Inversión"
										: "Investment"}
								</p>
							</Description>
							<Description>
								<p>{idioma === "es" ? "Legal" : "Legal"}</p>
							</Description>
						</div>
					</Servicio>
				</div>
				<Text className={styles.text}>
					{idioma === "es"
						? "Disponemos de un equipo conformado por profesionales con larga trayectoria en el sector público y con amplia experiencia en el diseño e implementación de políticas públicas."
						: "We have a team made up of professionals with a long track record in the public sector and with extensive experience in the design and implementation of public policies."}
				</Text>
			</div>
		</Section>
	);
};

export default AboutSection;
