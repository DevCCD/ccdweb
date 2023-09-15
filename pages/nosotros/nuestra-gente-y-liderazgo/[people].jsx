import MainLayout from "../../../src/layouts/MainLayout";
import { motion } from "framer-motion";
import styles from "../../../src/styles/PerfilPerson.module.css";
import { idiomaAtom } from "../../../src/atoms/idiomAtom";
import { useAtom } from "jotai";
import { Link } from "react-scroll";
import FacebookIcon from "../../../src/components/Icons/FacebookIcon";
import Section from "../../../src/components/Section";
import WhatsAppIcon from "../../../src/components/Icons/WhatsAppIcon";
import { MailFillIcon } from "../../../src/components/Icons/Interface";
import LinkedinIcon from "../../../src/components/Icons/LinkedinIcon";
import { facebookUrl, linkedinUrl } from "../../../src/data";
import { Button } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { people } from "../../../src/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PeoPle = () => {
	const router = useRouter();
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (router.query.people) {
			const user = people.find(
				(item) => item.slug === router.query.people
			);
			setUser(user);
			setLoading(false);
		} else {
			router.replace("/nosotros/nuestra-gente-y-liderazgo");
		}
	}, [router]);

	const { isDark } = useTheme();
	const [idioma] = useAtom(idiomaAtom);

	const initialGradient = isDark
		? `radial-gradient(circle farthest-corner at top right, #0b0b0b 20%,#1b1c1c 50%,#1b1c1c 100%)`
		: `radial-gradient(circle farthest-corner at top right, #fff 14%,#ccf2ff 50%,#cce1ff 100%)`;
	const finalGradient = isDark
		? `radial-gradient(circle farthest-corner at top right, #0b0b0b 20%,#1b1c1c 50%,#323438 100%)`
		: `radial-gradient(circle farthest-corner at top right, #fff 14%,#ccf2ff 50%,#cce1ff 100%)`;

	const btnList = [
		{
			icon: <FacebookIcon size={18} />,
			href: user?.facebook,
		},
		{
			icon: <WhatsAppIcon size={18} />,
			href: `https://wa.me/+51${user?.celular}`,
		},
		{
			icon: <MailFillIcon size={18} />,
			href: `mailto:${user?.email}`,
		},
		{
			icon: <LinkedinIcon size={18} />,
			href: user?.linkedin,
		},
	];

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

	return loading ? (
		<>
			<h1>Loading...</h1>
		</>
	) : (
		<>
			<MainLayout title={`Perfil de ${user?.nombre} ${user?.apellido}`}>
				<motion.header
					className={styles.header}
					initial={{
						background: initialGradient,
					}}
					animate={{
						background: finalGradient,
					}}
					transition={{ type: "spring" }}
				>
					<div className={styles.header_wrapper}>
						<div className={styles.container}>
							<div className={styles.person}>
								<picture className={styles.person_img}>
									<img
										src={`/assets/images/people/${user?.imagen}`}
									/>
								</picture>
							</div>
							<div className={styles.person_info}>
								<h2 className={styles.person_name}>
									{user?.nombre} {user?.apellido}
								</h2>
								<p className={styles.cargo}>
									{idioma === "es"
										? user?.cargoSpanish
										: user?.cargoEnglish}
								</p>

								<p className={styles.person_frase}>
									{idioma === "es"
										? user?.fraseSpanish
										: user?.fraseEnglish}
								</p>
								<div className={styles.sociales}>
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
						</div>
					</div>
				</motion.header>
				<Section title='person_section' css={{ padding: "0 0 0 0" }}>
					<div className='wrapper container'>
						<div className={styles.dualGrid}>
							<div className={styles.content}>
								<article id='aboutme'>
									<h2 className={styles.title_about}>
										{idioma === "es"
											? `Acerca de ${user?.nombre}`
											: `About ${user?.nombre}`}
									</h2>
									<p className={styles.text_about}>
										{user?.parrafos?.map(
											(parrafo, index) => (
												<>
													{idioma === "es"
														? parrafo.es
														: parrafo.en}
													<br />
													<br />
												</>
											)
										)}
									</p>
								</article>
							</div>
							<div className={styles.aside_wrapper}>
								<div className={styles.aside}>
									<div className={styles.head_aside}>
										<h2 className={styles.title_about}>
											{idioma === "es"
												? "Contenido"
												: "Content"}
										</h2>
									</div>
									<ul className={styles.body_aside}>
										<li>
											<CustomLink to='aboutme'>
												{idioma === "es"
													? `Acercade ${user?.nombre}`
													: `About ${user?.nombre}`}
											</CustomLink>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Section>
			</MainLayout>
		</>
	);
};

export default PeoPle;
