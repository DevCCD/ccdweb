import LayoutPhoneMenu from "./Layout";
import styles from "../styles/navMenuPhone.module.css";
import { menuNavPhoneAtom } from "../../../atoms/navbarAtom";
import { useAtom } from "jotai";
import { Button, Radio, Switch } from "@nextui-org/react";

import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { idiomaAtom } from "../../../atoms/idiomAtom";
import UsaIcon from "../../Icons/UsaIcon";
import PeruIcon from "../../Icons/PeruIcon";

const PageMenuPhone = ({ title, setIndexSlide, handleScroll }) => {
	const [modalito, setModalito] = useState(false);

	const [idioma, setIdioma] = useAtom(idiomaAtom);

	const { theme, setTheme } = useNextTheme();
	const { isDark } = useTheme();
	const toogleTheme = () => {
		setTheme(isDark ? "light" : "dark");
	};

	const [menuPhone, setMenuPhone] = useAtom(menuNavPhoneAtom);
	const routePage = [
		{
			name: idioma === "es" ? "Inicio" : "Home",
			onClick: () => setIndexSlide(1),
		},
		{
			name: idioma === "es" ? "Nosotros" : "About",
			onClick: () => setIndexSlide(2),
		},
		{
			name: idioma === "es" ? "Servicios" : "Services",
			onClick: () => setIndexSlide(3),
		},
		{
			name: idioma === "es" ? "Contacto" : "Contact",
			onClick: () => {
				handleScroll("contacto");
				setMenuPhone(false);
			},
		},
		{
			name: idioma === "es" ? "Mi Desarrollo" : "My Development",
			onClick: () => setIndexSlide(4),
		},
	];

	const openModalito = () => {
		setModalito(true);
	};

	const closeModalito = () => {
		setModalito(false);
	};

	const changeIdioma = (idioma) => {
		setIdioma(idioma);
		setTimeout(() => {
			closeModalito();
		}, 600);
	};

	return (
		<>
			<LayoutPhoneMenu title={title}>
				<LayoutPhoneMenu.Card>
					<nav className={styles.navmenu}>
						<ul>
							{routePage.map((route, index) => (
								<li key={index}>
									<LayoutPhoneMenu.Item
										onClick={route.onClick}
										titulo={route.name}
									/>
								</li>
							))}
						</ul>
					</nav>
				</LayoutPhoneMenu.Card>
				<div className={styles.space} />
				<div className={styles.header} style={{ marginTop: ".25rem" }}>
					<div className={styles.header_wrapper}>
						<h2>
							{idioma === "es" ? "Preferencias" : "Preferences"}
						</h2>
					</div>
					<div className={styles.keloke} />
				</div>
				<LayoutPhoneMenu.Card>
					<div className={styles.navmenu}>
						<ul>
							<li>
								<LayoutPhoneMenu.Item
									titulo={
										idioma === "es" ? "Idioma" : "Language"
									}
									afterarrow={
										<p className={styles.ghostText}>
											{idioma === "es"
												? "Español Perú"
												: "English USA"}
										</p>
									}
									onClick={openModalito}
								/>
							</li>
							<li>
								<LayoutPhoneMenu.Item
									onClick={toogleTheme}
									titulo={
										idioma === "es"
											? "Modo Oscuro"
											: "Dark Mode"
									}
									rightcomponent={
										<Switch
											color={"success"}
											css={{ pointerEvents: "none" }}
											checked={isDark}
										/>
									}
								/>
							</li>
						</ul>
					</div>
				</LayoutPhoneMenu.Card>
			</LayoutPhoneMenu>
			<AnimatePresence>
				{modalito && (
					<>
						<div className={styles.containerModalito}>
							<motion.div
								className={styles.overlayModalito}
								onClick={closeModalito}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={
									{
										// type: "spring",
										// duration: 0.2,
									}
								}
							/>
							<div className={styles.modalito_container}>
								<motion.div
									className={styles.modalito}
									initial={{ y: "200px" }}
									animate={{ y: 0 }}
									exit={{ y: "800px" }}
								>
									<div className={styles.modalito_header}>
										<h4 className={styles.modalito_titulo}>
											{idioma === "es"
												? "Seleccione un idioma"
												: "Select a language"}
										</h4>
									</div>
									<div className={styles.modalito_body}>
										<div className={styles.navmenu}>
											<Radio.Group
												aria-label='idioma'
												value={idioma}
												color='success'
											>
												<ul>
													<li>
														<LayoutPhoneMenu.Item
															titulo={
																"Español Perú - ES"
															}
															titlestyle={{
																fontSize:
																	"17px",
																fontWeight: 400,
															}}
															onClick={() =>
																changeIdioma(
																	"es"
																)
															}
															rightcomponent={
																<Radio
																	aria-label='idioma-es'
																	value='es'
																	color='success'
																	css={{
																		pointerEvents:
																			"none",
																	}}
																/>
															}
															afterarrow={
																<PeruIcon />
															}
														/>
													</li>
													<li>
														<LayoutPhoneMenu.Item
															titulo={
																"English USA - EN"
															}
															titlestyle={{
																fontSize:
																	"17px",
																fontWeight: 400,
															}}
															onClick={() => {
																changeIdioma(
																	"en"
																);
															}}
															rightcomponent={
																<Radio
																	aria-label='idioma-en'
																	value='en'
																	color='success'
																	css={{
																		pointerEvents:
																			"none",
																	}}
																/>
															}
															afterarrow={
																<UsaIcon />
															}
														/>
													</li>
												</ul>
											</Radio.Group>
										</div>
										<Button
											size={"lg"}
											onClick={closeModalito}
											className={
												styles.btnCancelarModalito
											}
											color='success'
											flat
										>
											CANCELAR
										</Button>
									</div>
								</motion.div>
							</div>
						</div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default PageMenuPhone;
