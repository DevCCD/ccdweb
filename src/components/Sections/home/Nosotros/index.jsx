import styles from "./styles/nosotrosSection.module.css";

import { Button, Text } from "@nextui-org/react";
import { DiseñoCCD } from "../../../Icons/Brands";
import { SwiperNosotrosSection } from "../../../Swipers";
import Section from "../../../Section";
import TitleSection from "../../../TitleSection";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import PlayIcon from "../../../Icons/Interface/PlayIcon";
import Image from "next/image";
import { useState } from "react";
import { CloseIcon } from "../../../Icons/Interface";
import FocoItem from "../../../Icons/Interface/FocoItem";

const NosotrosSection = ({ idioma }) => {
	const router = useRouter();
	const isMdScreen = useMediaQuery("(min-width: 820px)");
	const isSMScreen = useMediaQuery("(min-width: 768px)");

	const [modalVideo, setModalVideo] = useState(false);
	const [btnActive, setBtnActive] = useState(false);
	const [foquito, setFoquito] = useState(false);

	return (
		<>
			<Section id='nosotros'>
				<div className='wrapper container'>
					<div className={styles.dualgrid_nosotros}>
						<div className={styles.dualgrid_item_left}>
							<motion.div
								className={
									btnActive
										? `${styles.pre_modal_video} ${styles.active}`
										: styles.pre_modal_video
								}
								layoutId='modal_video'
							>
								<div className={styles.contentMedia}>
									<motion.div
										className={styles.design}
										initial={{ scale: 1 }}
										animate={{ scale: btnActive ? 0 : 1 }}
										transition={{ duration: 0.5 }}
									>
										<motion.div
											className={styles.lineaDashed}
											style={{
												animation:
													"spin 64s linear infinite",
											}}
										/>
										<motion.div
											className={styles.lineaDashed}
											style={{
												width: "75%",
												height: "75%",
												animation:
													"spin_reverse 50s linear infinite",
											}}
										/>
										<motion.div
											className={styles.lineaDashed}
											style={{
												width: "50%",
												height: "50%",
												animation:
													"spin 34s linear infinite",
											}}
										/>
									</motion.div>
								</div>
								<motion.button
									title='Click para reproducir'
									className={styles.playButton}
									type='button'
									role={"button"}
									whileTap={{ scale: 0.9 }}
									onMouseEnter={() => setBtnActive(true)}
									onMouseLeave={() => setBtnActive(false)}
									// style={{
									// 	animation: btnActive
									// 		? "pulse 3.25s linear infinite"
									// 		: "",
									// }}
									onClick={() => setModalVideo(true)}
								>
									<div
										className={
											btnActive
												? `${styles.gradient} ${styles.active}`
												: styles.gradient
										}
									/>
									<motion.div
										className={styles.btn_icon}
										initial={{ scale: 1 }}
										animate={{
											scale: btnActive ? 0.8 : 1,
										}}
									>
										<PlayIcon
											style={{
												marginLeft: "6px",
												PointerEvents: "none",
											}}
											size={70}
										/>
									</motion.div>
								</motion.button>
							</motion.div>
						</div>
						<div className={styles.dualgrid_item_right}>
							<TitleSection
								start={isMdScreen}
								subtitle={
									idioma === "es"
										? "Quienes Somos"
										: "Who we are"
								}
							>
								{idioma === "es" ? "Nosotros" : "About us"}
							</TitleSection>
							<div className={styles.content_wrapper}>
								<motion.div
									className={styles.mision_vision}
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{
										once: true,
										margin: "-100px",
									}}
								>
									<SwiperNosotrosSection idioma={idioma} />
								</motion.div>
								<div>
									<motion.div
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
										viewport={{
											once: true,
											margin: "-100px",
										}}
									>
										<Text
											className={styles.parrafo}
											style={{
												textAlign: isMdScreen
													? "left"
													: "center",
											}}
										>
											{idioma === "es"
												? `En `
												: `At the `}
											<Text b>
												{idioma === "es"
													? `Centro para la Competitividad y el Desarrollo `
													: `Center for Competitiveness and Development `}
											</Text>
											{idioma === "es"
												? "(CCD) nos distinguimos por ser una institución donde tenemos como objetivo promover la competitividad y el desarrollo del país a través del diseño y el apoyo en la implementación y gestión de políticas públicas."
												: "(CCD) we stand out for being an institution where our goal is to promote the competitiveness and development of the country through the design and support in the implementation and management of public policies."}
											<br />
											{idioma === "es"
												? "Disponemos de un equipo conformado por profesionales con larga trayectoria en el sector público y con amplia experiencia en el diseño e implementación de políticas públicas."
												: "We have a team made up of professionals with a long track record in the public sector and with extensive experience in the design and implementation of public policies."}
										</Text>
									</motion.div>
									<motion.div
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
										viewport={{
											once: true,
											margin: "-100px",
										}}
									>
										<Button
											className={styles.button}
											bordered
											auto
											onPress={() =>
												router.push("/nosotros")
											}
										>
											{idioma === "es"
												? "Ver más"
												: "See more"}
										</Button>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Section>

			<AnimatePresence>
				{modalVideo && (
					<motion.div className={styles.container_modal}>
						<motion.div
							className={styles.overlay}
							onClick={() => setModalVideo(false)}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ type: "spring" }}
						/>
						{foquito && (
							<div
								className={styles.como_cine}
								onClick={() => setFoquito(false)}
							/>
						)}
						<motion.div
							layoutId={isSMScreen ? "modal_video" : ""}
							className={styles.modal_video}
							exit={{ y: 1000 }}
						>
							<div className={styles.header}>
								<h2 className={styles.header_text}>
									{idioma === "es"
										? "Video de Introducción"
										: "Introduction Video"}
								</h2>
								<motion.button
									type='button'
									role={"button"}
									className={styles.close}
									whileTap={{ scale: 0.85 }}
									onClick={() => {
										setModalVideo(false);
										setFoquito(false);
									}}
								>
									<CloseIcon size={30} />
								</motion.button>
							</div>
							<div
								className={styles.body_video}
								style={foquito ? { background: "#000" } : {}}
							>
								<YouTube
									videoId='oTOWdEzq4_Q'
									id='youtube'
									className={styles.youtube}
									iframeClassName={styles.iframe_youtube}
									title='CCD Video de Bienvenida'
									iframeName='youtube'
									loading='lazy'
								/>
							</div>
							<AnimatePresence>
								{!foquito && (
									<motion.span
										className={styles.foquito_masna}
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										onClick={() => setFoquito(true)}
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0 }}
									>
										<FocoItem size={24} />
									</motion.span>
								)}
							</AnimatePresence>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default NosotrosSection;
