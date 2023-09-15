import { Text } from "@nextui-org/react";
import CountUp from "react-countup";
import styles from "../Hero/Hero.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Estadistic = ({
	idioma,
	spanish,
	ingles,
	end,
	duration = 2.25,
	symbol,
	scrollDirection,
}) => {
	const [animate, setAnimate] = useState(false);

	return (
		<>
			<motion.h3
				className={
					scrollDirection
						? `${styles.estad_number} ${styles.compact}`
						: styles.estad_number
				}
				animate={animate ? "animate" : "initial"}
				variants={{
					animate: {
						scale: 1.1,
						transition: {
							duration: 0.12,
							repeat: 1,
							repeatType: "reverse",
						},
					},
					initial: {
						scale: 1,
					},
				}}
			>
				<CountUp
					start={0}
					end={end}
					duration={duration}
					suffix={symbol}
					onEnd={() => setAnimate(true)}
				/>
			</motion.h3>
			<Text
				color='currentColor'
				className={
					scrollDirection
						? `${styles.estad_label} ${styles.compact}`
						: styles.estad_label
				}
			>
				{idioma === "es" ? spanish : ingles}
			</Text>
		</>
	);
};

export default Estadistic;
