import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles/genteLiderazgo.module.css";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import ArrowRightIcon from "../../../Icons/ArrowRightIcon";
import SkeletonUI from "../../../Loaders/SkeletonUI";

const GenteLiderazgoSection = ({ idioma }) => {
	const Servicio = ({
		title,
		children,
		image,
		reverse,
		styleImage,
		styleContainer,
		textLink = "Ver más",
		url = "/",
	}) => {
		return (
			<div
				className={
					reverse
						? `${styles.servicio} ${styles.reverse}`
						: `${styles.servicio}`
				}
				style={styleContainer}
			>
				<motion.div
					className={styles.servicioImage}
					style={styleImage}
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
					<Link href={url} className={styles.link}>
						{textLink}
						<ArrowRightIcon />
					</Link>
				</motion.div>
			</div>
		);
	};

	return (
		<Section
			id='nosotros_gente_liderazgo'
			css={{
				padding: "50px 0 70px 0",
			}}
		>
			<div className='wrapper container'>
				<div className={styles.dualGrid}>
					<div className={styles.content}>
						<article id='liderazgo'>
							<TitleSection start noSubtitle={true}>
								{idioma === "es"
									? "Liderazgo de Oficina"
									: "Office Leadership"}
							</TitleSection>
							<div
								style={{
									marginTop: "2.5rem",
								}}
							>
								<Servicio
									image={"/assets/images/people/rudy.jpeg"}
									styleImage={{ minHeight: "340px" }}
									styleContainer={{ alignItems: "center" }}
									textLink={
										idioma === "es"
											? "Visita la Oficina del Director General"
											: "Visit the Office of the General Director"
									}
									url='nuestra-gente-y-liderazgo/rudy-laguna'
								>
									<h3 className={styles.leaderTitle}>
										{idioma === "es"
											? "Director General del CCD"
											: "Director General of the CCD"}
									</h3>
									<p className={styles.leaderDescription}>
										{idioma === "es"
											? "Rudy Laguna lidera la institución Centro para la Competitividad y el Desarrollo"
											: "Rudy Laguna leads the institution Centro para la Competitividad y el Desarrollo"}
									</p>
								</Servicio>
								<Servicio
									reverse={true}
									image={"/assets/images/people/viviana.jpeg"}
									styleImage={{ minHeight: "350px" }}
									styleContainer={{ alignItems: "center" }}
									textLink={
										idioma === "es"
											? "Visita la Oficina de la Directora"
											: 'Visit the "Position" Office'
									}
									url='nuestra-gente-y-liderazgo/viviana-sanchez'
								>
									<h3 className={styles.leaderTitle}>
										{idioma === "es"
											? "Directora en CCD"
											: "Director in CCD"}
									</h3>
									<p className={styles.leaderDescription}>
										{idioma === "es"
											? "Viviana Sánchez Experiencia laboral en la Oficina Jurídica del Ministerio de Economía y Finanzas"
											: "Viviana Sánchez Work experience in the Legal Office of the Ministry of Economy and Finance"}
									</p>
								</Servicio>
							</div>
						</article>
						{/* <article id='gente'>
							<TitleSection start noSubtitle={true}>
								{idioma === "es"
									? "Nuestra Gente"
									: "Our People"}
							</TitleSection>
							<div className={styles.genteGrid}>
								<GenteItem
									range={
										idioma === "es"
											? "CCD TECH - Miembro"
											: "CCD TECH - Member"
									}
									name='Anderson Almeyda'
									position={
										idioma === "es"
											? "Desarrollador de Software"
											: "Software Developer"
									}
									description={
										idioma === "es"
											? "Si puedes Imaginarlo, puedes Programarlo"
											: "If you can imagine it, you can program it"
									}
								/>
								<GenteItem
									range={
										idioma === "es"
											? "CCD TECH - Jefe de Área"
											: "CCD TECH - Area Manager"
									}
									name='Luis F. Valdivia'
									position={
										idioma === "es"
											? "Desarrollador de Software"
											: "Software Developer"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
									// image='/assets/images/people/anderson.jpeg'
								/>
								<GenteItem
									range='Rango Ejemplo'
									name='Persona Ejemplo'
									position={
										idioma === "es"
											? "Cargo Ejemplo"
											: "Position Example"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
								/>
								<GenteItem
									range='Rango Ejemplo'
									name='Persona Ejemplo'
									position={
										idioma === "es"
											? "Cargo Ejemplo"
											: "Position Example"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
								/>
								<GenteItem
									range='Rango Ejemplo'
									name='Persona Ejemplo'
									position={
										idioma === "es"
											? "Cargo Ejemplo"
											: "Position Example"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
								/>
								<GenteItem
									range='Rango Ejemplo'
									name='Persona Ejemplo'
									position={
										idioma === "es"
											? "Cargo Ejemplo"
											: "Position Example"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
								/>
								<GenteItem
									range='Rango Ejemplo'
									name='Persona Ejemplo'
									position={
										idioma === "es"
											? "Cargo Ejemplo"
											: "Position Example"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
								/>
								<GenteItem
									range='Rango Ejemplo'
									name='Persona Ejemplo'
									position={
										idioma === "es"
											? "Cargo Ejemplo"
											: "Position Example"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
								/>
								<GenteItem
									range='Rango Ejemplo'
									name='Persona Ejemplo'
									position={
										idioma === "es"
											? "Cargo Ejemplo"
											: "Position Example"
									}
									description={
										idioma === "es"
											? "Lema ejemplo"
											: "Lema ejemplo"
									}
								/>
							</div>
						</article> */}
					</div>
					<div className={styles.aside_wrapper}>
						<div className={styles.aside}>
							<div className={styles.head_aside}>
								<TitleArticle>
									{idioma === "es" ? "Contenido" : "Content"}
								</TitleArticle>
							</div>
							<ul className={styles.body_aside}>
								<li>
									<CustomLink to='liderazgo'>
										{idioma === "es"
											? "Liderazgo de Oficina"
											: "Office Leadership"}
									</CustomLink>
								</li>
								{/* <li>
									<CustomLink to='gente'>
										{idioma === "es"
											? "Nuestra Gente"
											: "Our People"}
									</CustomLink>
								</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
};

const GenteItem = ({ image, name, position, slogan, range }) => {
	return (
		<motion.div
			className={styles.genteItem}
			whileHover={{
				scale: 1.05,
				boxShadow: "0px 0px 10px 0px rgba(100, 100, 111, 0.2)",
				// transition: { duration: 0.3 },
			}}
		>
			<div className={styles.genteImage}>
				<SkeletonUI radius={"50%"} className={"imageLoader"} />
				{/* <Image src='/assets/images/people/rudy.jpeg' /> */}
			</div>
			<div className={styles.genteInfo}>
				<p className={styles.genteRange}>{range}</p>
				<h3 className={styles.genteName}>{name}</h3>
				<p className={styles.gentePosition}>{position}</p>
				<p className={styles.genteDescription}>
					{slogan && `"${slogan}"`}
				</p>
			</div>
		</motion.div>
	);
};

const CustomLink = ({ children, to }) => {
	return (
		<LinkScroll
			to={to}
			spy={true}
			smooth={true}
			offset={-45}
			duration={300}
			className={styles.linkAside}
			activeClass={"activazo"}
		>
			{children}
		</LinkScroll>
	);
};

const TitleArticle = ({ children }) => {
	return (
		<h3 className={styles.titleArticle}>
			{children}
			<span className={styles.line}></span>
		</h3>
	);
};

export default GenteLiderazgoSection;
