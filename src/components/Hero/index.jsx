import styles from "./Hero.module.scss";
import { motion } from "framer-motion";
import { Button, Text } from "@nextui-org/react";
import { GlobeLarge } from "../Globe";
import Estadistic from "../Estadistic";
import LineSvg from "../LineSvg";
import useMediaQuery from "../../hooks/useMediaQuery";
import PhoneIconFill from "../Icons/Interface/PhoneIconFill";
import { contactNumber } from "../../data/index";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectFade } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import BottomSection from "../BottomSection";
import MapInfoIcon from "../Icons/Interface/MapInfoIcon";
import { useAtom } from "jotai";
import { brochureModalAtom } from "../../atoms/modalsAtom";

const HeroBanner = ({ idioma }) => {
	const lgScren = useMediaQuery("(min-width: 1000px)");
	const [isOpen, setIsOpen] = useAtom(brochureModalAtom);

	const handleOpenModal = () => {
		setIsOpen(true);
		console.log("si me haces click ctmre");
	};

	return (
		<section id='hero' className={styles.hero}>
			{/* original */}
			<div className={styles.heroBody}>
				<div className={styles.bg} />
				<motion.div className={styles.heroContent}>
					<motion.div
						className={styles.mainContent}
						initial={{
							opacity: 0,
							y: 100,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration: 0.35,
						}}
					>
						<Text color='currentColor' className={styles.title} h1>
							{idioma === "es"
								? "Centro para la Competitividad y el Desarrollo"
								: "Center for Competitiveness and Development"}
						</Text>
						<Text color='currentColor' className={styles.parrafo}>
							{idioma === "es"
								? "Promovemos el desarrollo sostenible en base al principio de la competitividad con el objetivo de mejorar la calidad de vida de los ciudadanos."
								: "We promote sustainable development based on the principle of competitiveness with the aim of improving the quality of life of citizens."}
						</Text>
						<div className={styles.buttons}>
							<Button
								as={"a"}
								size={"lg"}
								color={"primary"}
								auto
								href={`tel:+51${contactNumber}`}
							>
								<PhoneIconFill
									size={16}
									style={{ marginRight: ".5rem" }}
								/>
								{idioma === "es" ? "Contáctanos" : "Contact us"}
							</Button>
							<motion.button
								whileTap={{ scale: 0.94 }}
								className={styles.buttonModal}
								onClick={handleOpenModal}
							>
								{/* <MapInfoIcon
									size={16}
									style={{ marginRight: ".5rem" }}
								/> */}
								{idioma === "es"
									? "Conócenos más"
									: "Know us more"}
							</motion.button>
						</div>
					</motion.div>
					{lgScren && <GlobeLarge />}
				</motion.div>
			</div>

			{/* new */}
			<div
				style={{
					height: "100px",
				}}
			/>
		</section>
	);
};

export default HeroBanner;