import styles from "./styles/BrochureTrigger.module.css";
import { AnimatePresence, motion } from "framer-motion";
import BrochureIcon from "../Icons/BrochureIcon";
import { Text } from "@nextui-org/react";
import { useState } from "react";
import { useAtom } from "jotai";
import { brochureModalAtom } from "../../atoms/modalsAtom";

const BrochureTrigger = ({ idioma }) => {
	const [isHovered, setIsHovered] = useState(false);
	const [isOpen, setIsOpen] = useAtom(brochureModalAtom);

	return (
		<motion.div
			className={styles.container}
			title={idioma === "es" ? "Descargar Brochure" : "Download Brochure"}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
			onClick={() => setIsOpen(true)}
			initial={{ translateX: 100 }}
			animate={{ translateX: isOpen ? "100%" : 0 }}
			transition={{
				delay: isOpen ? 0 : 0.35,
				duration: 0.5,
				type: "spring",
			}}
		>
			<div className={styles.content}>
				<BrochureIcon />
				<Text className={styles.title}>
					Conócenos <br /> más
				</Text>
			</div>
			<AnimatePresence>
				{isHovered && (
					<motion.div
						className={styles.span}
						initial={{ width: 0 }}
						animate={{ width: 30 }}
						exit={{ width: 0 }}
					>
						{idioma === "es" ? "Descargar" : "Download"}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default BrochureTrigger;
