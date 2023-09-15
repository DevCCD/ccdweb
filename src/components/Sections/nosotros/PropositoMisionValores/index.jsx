import { useState } from "react";
import { Link } from "react-scroll";
import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import styles from "./styles/index.module.css";

const PropositoSection = ({ idioma }) => {
	const CustomLink = ({ children, to }) => {
		return (
			<Link
				to={to}
				spy={true}
				smooth={true}
				offset={-45}
				duration={300}
				className={styles.linkAside}
				activeClass={"activazo"}
			>
				{children}
			</Link>
		);
	};

	return (
		<Section
			id='nosotros_proposito'
			css={{
				padding: "50px 0 70px 0",
			}}
		>
			<div className='wrapper container'>
				<div className={styles.dualGrid}>
					<div className={styles.content}>
						<article id='proposito'>
							<TitleSection noSubtitle start>
								{idioma === "es"
									? "Nuestro Propósito"
									: "Our Purpose"}
							</TitleSection>
							<p>
								{idioma === "es"
									? "Promover el desarrollo sostenible en base al principio de la competitividad con el objetivo de mejorar la calidad de vida de los ciudadanos."
									: "Promote sustainable development based on the principle of competitiveness with the aim of improving the quality of life of citizens."}
							</p>
						</article>
						<article id='mision'>
							<TitleSection noSubtitle start>
								{idioma === "es"
									? "Nuestra Misión"
									: "Our Mission"}
							</TitleSection>
							<p>
								{idioma === "es"
									? "Brindar asesorías, consultorías y capacitaciones en el marco de la gestión social, la inversión pública y privada ."
									: "Provide advice, consulting and training in the framework of social management, public and private investment."}
							</p>
						</article>
						<article id='vision'>
							<TitleSection noSubtitle start>
								{idioma === "es"
									? "Nuestra Visión"
									: "Our Vision"}
							</TitleSection>
							<p>
								{idioma === "es"
									? "Ser una empresa líder en consultoría en el marco de Inversión publica  y privada."
									: "To be a leading company in consulting in the framework of public and private investment."}
							</p>
						</article>
						<article id='valores'>
							<TitleSection noSubtitle start>
								{idioma === "es"
									? "Nuestros Valores"
									: "Our Values"}
							</TitleSection>
							<TitleArticle>
								{idioma === "es"
									? "Adherirse a los más altos estándares profesionales"
									: "Adhere to the highest professional standards"}
							</TitleArticle>
							<ul className={styles.list}>
								<li>
									<p>
										{/* anteponer los intereses de los clientes
										a los de nuestra empresa. */}
										{idioma === "es"
											? "Liderazgo"
											: "Leadership"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Colaboración"
											: "Collaboration"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Diversidad"
											: "Diversity"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Calidad"
											: "Quality"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Aprendizaje"
											: "Learning"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Exito e inclusión"
											: "Success and inclusion"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Integridad y responsabilidad"
											: "Integrity and responsibility"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Seguridad, colaboración y creatividad"
											: "Safety, collaboration and creativity"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Innovación, aprendizaje y mejora continua"
											: "Innovation, learning and continuous improvement"}
										.
									</p>
								</li>
								<li>
									<p>
										{idioma === "es"
											? "Trabajo en equipo, sustentabilidad e impacto social"
											: "Teamwork, sustainability and social impact"}
										.
									</p>
								</li>
							</ul>
						</article>
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
									<CustomLink to='proposito'>
										{idioma === "es"
											? "Nuestro Propósito"
											: "Our Purpose"}
									</CustomLink>
								</li>
								<li>
									<CustomLink to='mision'>
										{idioma === "es"
											? "Nuestra Misión"
											: "Our Mission"}
									</CustomLink>
								</li>
								<li>
									<CustomLink to='vision'>
										{idioma === "es"
											? "Nuestra Visión"
											: "Our Vission"}
									</CustomLink>
								</li>
								<li>
									<CustomLink to='valores'>
										{idioma === "es"
											? "Nuestros Valores"
											: "Our Values"}
									</CustomLink>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Section>
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

export default PropositoSection;
