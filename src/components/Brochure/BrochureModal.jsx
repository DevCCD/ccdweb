import styles from "./styles/BrochureModal.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button, Text } from "@nextui-org/react";
import { useAtom } from "jotai";
import { brochureModalAtom } from "../../atoms/modalsAtom";
import { idiomaAtom } from "../../atoms/idiomAtom";
import BrochureBottom from "./template/BrochureBottom";
import BrochureTop from "./template/BrochureTop";
import BrochureQr from "../QRcodes/BrochureQr";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import DownloadIcon from "../Icons/DownloadIcon";
import QrIcon from "../Icons/QrIcon";

const BrochureModal = () => {
	const [idioma] = useAtom(idiomaAtom);
	const [isOpen, setIsOpen] = useAtom(brochureModalAtom);
	const [brochureOpen, setBrochureOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [isOpen]);

	const cerrarModal = () => {
		setIsOpen(false);
		setBrochureOpen(false);
	};

	const openUrl = (url) => {
		window.open(url, "_blank");
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div className={styles.modalContainer}>
					<motion.div
						className={styles.modal__overlay}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.25 } }}
						exit={{ opacity: 0, transition: { duration: 0.25 } }}
						onClick={cerrarModal}
					/>
					<motion.div
						className={styles.modal}
						initial={{
							y: 1000,
						}}
						animate={{
							opacity: 1,
							y: 0,
							transition: {
								type: "spring",
								duration: 0.15,
								delay: 0.1,
							},
						}}
						exit={{
							y: 1000,
							transition: {
								type: "spring",
								duration: 0.15,
								delay: 0.1,
							},
						}}
					>
						<div className={styles.modalHeader}>
							<Text h2 className={styles.title}>
								{idioma === "es"
									? "Conócenos más"
									: "Know us more"}
							</Text>
							<button
								className={styles.close}
								onClick={cerrarModal}
							>
								<div className={styles.line} />
								<div className={styles.line} />
							</button>
						</div>
						<div className={styles.modalBody}>
							<div className={styles.modalBody_left}>
								<div
									className={
										brochureOpen
											? `${styles.brochure} ${styles.open}`
											: `${styles.brochure}`
									}
									title={
										idioma === "es"
											? "Click abrir"
											: "Click Open"
									}
									onClick={() =>
										setBrochureOpen(!brochureOpen)
									}
								>
									<div className={styles.contentBrochure}>
										<div
											style={{
												padding: ".5rem",
												paddingTop: "1.25rem",
												position: "relative",
												display: "grid",
												gridTemplateRows: "auto 1fr",
											}}
										>
											<Text
												className={styles.titleBrochure}
											>
												{idioma === "es"
													? "Escanee el codigo QR para visualizar"
													: "Scan the QR code to view"}
											</Text>
											<div
												className={styles.qr_container}
											>
												<div className={styles.qr}>
													<BrochureQr size={"100%"} />
												</div>
											</div>
										</div>
										<div className={styles.footPage}>
											{/* <span className={styles.nombrePage}>
												{idioma === "es"
													? "CCD"
													: "CCD"}
											</span>
											<span>
												{idioma === "es"
													? "Página 1 de 8"
													: "Page 1 of 8"}
											</span> */}
										</div>
									</div>
									<div className={styles.cover}>
										<div className={styles.cover_front}>
											<BrochureTop
												className={styles.pdftop}
											/>
											<BrochureBottom
												className={styles.pdfbot}
											/>
										</div>
										<div className={styles.cover_back}>
											<span></span>
										</div>
									</div>
								</div>
							</div>
							<div className={styles.modalBody_right}>
								<Text
									className={styles.parrafo}
									color='currentColor'
									size={14}
								>
									{idioma === "es" ? (
										<>
											Adquiere información sobre nosotros
											físico o digital y conoce todos los
											servicios que ofrecemos.
										</>
									) : (
										<>
											Acquire information about us
											physically or digital and know all
											the services we offer.
										</>
									)}
								</Text>
								{/* <Text className={styles.subtitle} size={15}>
									{idioma === "es"
										? "Escanea el código QR"
										: "Scan the QR code"}
								</Text>
								<Button
									width={"100% !important"}
									flat
									color={"#fff"}
									className={`${styles.button}`}
									onPress={() => {
										setBrochureOpen(!brochureOpen);
									}}
								>
									<QrIcon
										size={18}
										style={{
											marginRight: 10,
										}}
									/>
									{brochureOpen
										? idioma === "es"
											? "Ocultar codigo QR"
											: "Hide QR code"
										: idioma === "es"
										? "Mostrar codigo QR"
										: "Show QR code"}
								</Button> */}
								<Text className={styles.subtitle} size={15}>
									{idioma === "es"
										? "Adquiere información sobre nosotros en físico o digital y conoce todos los servicios que ofrecemos."
										: "Get a digital or physical copy"}
								</Text>
								<div
									style={{
										display: "flex",
										gap: 16,
										flexDirection: "column",
									}}
								>
									<Button
										className={`${styles.button}`}
										color={"#fff"}
										onClick={() => {
											openUrl(
												"assets/pdfs/conocenosmas.pdf"
											);
										}}
										flat
									>
										<DownloadIcon
											size={18}
											style={{
												marginRight: 10,
											}}
										/>
										{idioma === "es"
											? "Conócenos más"
											: "Know us more"}
									</Button>
									<Button
										width={"100% !important"}
										className={`${styles.button} ${styles.button_wsp}`}
										color={"success"}
										flat
										as='a'
										href={`https://wa.me/51927974418?text=${
											idioma === "es"
												? "Hola, quisiera adquirir una copia física del brochure de CCD"
												: "Hello, I would like to purchase a physical copy of the CCD brochure"
										}`}
										target='_blank'
									>
										<WhatsAppIcon
											size={18}
											style={{
												marginRight: 10,
											}}
										/>
										{idioma === "es"
											? "Soporte y copia física"
											: "Support and physical copy"}
									</Button>
								</div>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default BrochureModal;
