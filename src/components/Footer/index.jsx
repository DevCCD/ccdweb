import { Button, Text } from "@nextui-org/react";
import BrandCCD from "../Icons/Brands/BrandCCD";
import FacebookIcon from "../Icons/FacebookIcon";
import styles from "./styles/footer.module.css";
import { facebookUrl, contactNumber, emailUrl, linkedinUrl } from "../../data";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import { MailFillIcon } from "../Icons/Interface";
import LinkedinIcon from "../Icons/LinkedinIcon";
import { motion } from "framer-motion";
import Link from "next/link";
import SelectIdioma from "../SelectIdioma";
import AlmeydaBar from "../AlmeydaBar";

const Footer = ({ idioma }) => {
	let obtenerYear = new Date();
	let yearActual = obtenerYear.getFullYear();

	const btnList = [
		{
			icon: <FacebookIcon size={22} />,
			href: facebookUrl,
		},
		{
			icon: <WhatsAppIcon size={22} />,
			href: `https://wa.me/${contactNumber}`,
		},
		{
			icon: <MailFillIcon size={22} />,
			href: `mailto:${emailUrl}`,
		},
		{
			icon: <LinkedinIcon size={22} />,
			href: linkedinUrl,
		},
	];

	const routesPage = [
		{
			name: idioma === "es" ? "Inicio" : "Home",
			url: "/",
		},
		{
			name: idioma === "es" ? "Nosotros" : "About",
			url: "/nosotros",
		},
		{
			name: idioma === "es" ? "Trabajos" : "Works",
			url: "/servicios",
		},
		{
			name: idioma === "es" ? "Contacto" : "Contact",
			url: "/contact",
		},
	];

	const listServices = [
		{
			name:
				idioma === "es"
					? "Desarrollo y Competitividad"
					: "Development and Competitiveness",
			url: "/servicios/desarrollo-y-competitividad",
		},
		{
			name:
				idioma === "es"
					? "Politica y Gestion Pública"
					: "Public Policy and Public Management",
			url: "/servicios/politica-y-gestion-publica",
		},
		{
			name: idioma === "es" ? "Estudios Económicos" : "Economic Studies",
			url: "/servicios/estudios-economicos",
		},
		{
			name: idioma === "es" ? "Inversiones" : "Investments",
			url: "/servicios/inversiones",
		},
		{
			name: idioma === "es" ? "Legal" : "Legal",
			url: "/servicios/legal",
		},
	];

	const listContact = [
		{
			name: idioma === "es" ? "Celular:" : "Phone:",
			value: `+51 ${contactNumber}`,
		},
		{
			name: "Email",
			value: emailUrl,
		},
		{
			name: idioma === "es" ? "Dirección:" : "Address:",
			value: "Av. Felipe Pardo y Aliaga N° 699 San Isidro, LIMA - Lima",
		},
		{
			name: idioma === "es" ? "Horario:" : "Schedule:",
			value: "Lunes a Viernes de 9:00 a 18:00",
		},
	];

	return (
		<footer className={styles.footer}>
			<div className='wrapper container'>
				<div className={styles.topFooter}>
					<div className={styles.footerBrand}>
						<BrandCCD height={36} fill={"var(--logoColor"} />
						{/* <Text className={styles.textBrand}>
							{idioma === "es"
								? "Centro para la Competitividad y el Desarrollo"
								: "Center for Competitiveness and Development"}
						</Text> */}
						<Text className={styles.textDesc}>
							{idioma === "es"
								? "Institución cuyo fin es promover el desarrollo sostenible en base al principio de la competitividad con el objetivo de mejorar la calidad de vida de los ciudadanos."
								: "Institution whose purpose is to promote sustainable development based on the principle of competitiveness with the aim of improving the quality of life of citizens."}
						</Text>
						<div className={styles.buttons}>
							{btnList.map((btn, index) => (
								<motion.div
									key={index}
									whileHover={{ translateY: -8 }}
									whileTap={{ translateY: 0 }}
								>
									<Button
										as={"a"}
										href={btn.href}
										target='_blank'
										className={styles.button}
										auto
									>
										{btn.icon}
									</Button>
								</motion.div>
							))}
						</div>
					</div>

					<div className={styles.sections}>
						<div className={styles.twoSection}>
							<div className={styles.quickServices}>
								<Text className={styles.titleSection}>
									{idioma === "es" ? "Servicios" : "Services"}
								</Text>
								<ul className={styles.list}>
									{listServices.map((list, index) => (
										<li
											key={index}
											className={styles.listItem}
										>
											<Link
												href={list.url}
												className={styles.link}
											>
												{list.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className={styles.quickPages}>
								<Text className={styles.titleSection}>
									{idioma === "es" ? "Páginas" : "Pages"}
								</Text>
								<ul className={styles.list}>
									{routesPage.map((route, index) => (
										<li
											key={index}
											className={styles.listItem}
										>
											<Link
												href={route.url}
												className={styles.link}
											>
												{route.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className={styles.contact}>
							<Text className={styles.titleSection}>
								{idioma === "es" ? "Contacto" : "Contact"}
							</Text>
							<ul className={styles.list}>
								<li className={styles.listContacto}>
									<Text className={styles.text}>
										{idioma === "es"
											? "Celular:"
											: "Phone:"}
									</Text>
									<Text className={styles.text}>
										{`+51 ${contactNumber}`}
									</Text>
								</li>
								<li className={styles.listContacto}>
									<Text className={styles.text}>Email:</Text>
									<Text className={styles.text}>
										{emailUrl}
									</Text>
								</li>
								<li className={styles.listContacto}>
									<Text className={styles.text}>
										{idioma === "es"
											? "Dirección:"
											: "Address:"}
									</Text>
									<Text className={styles.text}>
										Av. Felipe Pardo y Aliaga N° 699 San
										Isidro, LIMA - Lima
									</Text>
								</li>
								<li className={styles.listContacto}>
									<Text className={styles.text}>
										{idioma === "es"
											? "Horario:"
											: "Schedule:"}
									</Text>
									<Text className={styles.text}>
										{idioma === "es"
											? "Lunes a Viernes de 9:00 a 18:00"
											: "Monday to Friday from 9:00 to 18:00"}
									</Text>
								</li>
								<li
									className={styles.listContacto}
									style={{
										alignItems: "center",
									}}
								>
									<Text
										className={styles.text}
										style={{
											fontSize: "12px",
											color: "var(--textColor)",
										}}
									>
										{idioma === "es"
											? "Esta pagina esta en:"
											: "This page is in:"}
									</Text>
									<SelectIdioma
										menuPosition={"top"}
										css={{
											backgroundColor:
												"var(--navBarHighlight)",
										}}
									/>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.bottomFooter}>
					<div className={styles.bfGap} />
					<ul className={styles.menu_bottomFooter}>
						<li className={styles.menu_item}>
							<Link href='/terminos-y-condiciones'>
								{idioma === "es"
									? "Terminos & Condiciones"
									: "Terms & Conditions"}
							</Link>
						</li>
						<li className={styles.menu_item}>
							<Link href='/politicas-de-privacidad'>
								{idioma === "es"
									? "Políticas de Privacidad"
									: "Privacy Policy"}
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* <AlmeydaBar /> */}
			<div className={styles.taco}>
				<div className={styles.taco_content}>
					<p>
						<span>
							{idioma === "es"
								? "CCD - Centro para la Competitividad y el Desarrollo "
								: "CCD - Center for Competitiveness and Development "}
						</span>
						{yearActual}
						{idioma === "es"
							? " Todos los derechos reservados"
							: " All rights reserved"}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
