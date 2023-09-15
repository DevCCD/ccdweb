import { useState, useEffect, useRef } from "react";
import createGlobe from "cobe";
import { motion } from "framer-motion";
import styles from "../Hero/Hero.module.scss";
import { useTheme } from "@nextui-org/react";

const GlobeLarge = () => {
	const { isDark } = useTheme();

	const globeSM = useRef(null);

	useEffect(() => {
		let phi = -20;
		let light_color = -1.5;

		const globe = createGlobe(globeSM.current, {
			devicePixelRatio: 2,
			width: 600 * 2,
			height: 600 * 2,
			phi: 0,
			theta: -0.3,
			dark: -1.5,
			// dark: 0.8,
			diffuse: 1,
			mapSamples: 5400,
			mapBrightness: 6,
			baseColor: [0.3, 0.3, 0.3],
			markerColor: [0.55, 0, 0],
			glowColor: [1, 1, 1],
			opacity: 0.8,
			markers: [
				{ location: [-12.046374, -77.042793], size: 0.1 },
				// { location: [56.130366, -106.346771], size: 0.03 },
				// { location: [23.634501, -102.552784], size: 0.025 },
				// { location: [-9.189967, -75.015152], size: 0.022 },
				// { location: [-35.675147, -71.542969], size: 0.015 },
				// { location: [40.463667, -3.74922], size: 0.03 },
				// { location: [-25.274398, 133.775136], size: 0.05 },

				// { location: [20.593684, 78.96288], size: 0.025 },
				// { location: [35.86166, 104.195397], size: 0.025 },
				// { location: [8.537981, -80.782127], size: 0.017 },
				// { location: [15.199999, -86.241905], size: 0.05 },
				// { location: [14.058324, 108.277199], size: 0.04 },

				// { location: [23.684994, 90.356331], size: 0.5 },
				// { location: [27.514162, 90.433601], size: 0.1 },
				// { location: [13.794185, -88.89653], size: 0.1 },
				// { location: [9.748917, -83.753428], size: 0.1 },
				// { location: [18.735693, -70.162651], size: 0.1 },
			],
			onRender: (state) => {
				state.phi = phi;
				phi += 0.0025;
				if (isDark) {
					state.dark = 0.8;
					state.glowColor = [0.25, 0.25, 0.25];
				} else {
					state.dark = -1.5;
					state.glowColor = [1, 1, 1];
				}
			},
		});

		return () => {
			globe.destroy();
		};
	}, [isDark]);

	return (
		<motion.div
			className={styles.heroPerson}
			initial={{
				opacity: 0,
				scale: 0,
			}}
			animate={{
				opacity: 1,
				scale: 1,
			}}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
				delay: 0.5,
			}}
		>
			<canvas
				ref={globeSM}
				id='globeLarge'
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: `600px`,
					height: `600px`,
					backgroundColor: "transparent",
					transition: "all 0.35s ease",
				}}
			/>
		</motion.div>
	);
};

export default GlobeLarge;
