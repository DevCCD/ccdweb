import styles from "./styles/styles.module.css";
import Estadistic from "../Estadistic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BottomSection = ({ idioma }) => {
	// router de next
	const router = useRouter();
	const { pathname } = router;

	// estado para saber si el scroll es hacia arriba o hacia abajo
	const [scrollY, setScrollY] = useState(null);
	const [scrollDirection, setScrollDirection] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const actualScrollY = window.scrollY;
			if (actualScrollY > scrollY) {
				setScrollDirection(true);
			} else {
				setScrollDirection(false);
			}
			setScrollY(actualScrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrollY]);

	const styleFooter = {
		position: "hidden",
		bottom: 0,
	};

	// useEffect(() => {
	// 	console.log(scrollDirection);
	// }, [scrollDirection]);

	return (
		<div
			className={styles.heroFooter}
			style={pathname === "/" ? styleFooter : {}}
		>
			<div className={`wrapper ${styles.estadisticas}`}>
				<div className={styles.estadistica}>
					<Estadistic
						idioma={idioma}
						end={256}
						spanish='Localidades y Comunidades'
						ingles='Localities and Communities'
						symbol='+'
						scrollDirection={scrollDirection}
					/>
				</div>
				<div className={styles.estadistica}>
					<Estadistic
						idioma={idioma}
						end={108}
						spanish='Distritos'
						ingles='Districts'
						symbol='+'
						scrollDirection={scrollDirection}
					/>
				</div>
				<div className={styles.estadistica}>
					<Estadistic
						idioma={idioma}
						end={12}
						spanish='Regiones'
						ingles='Regions'
						symbol='+'
						scrollDirection={scrollDirection}
					/>
				</div>
				<div
					className={styles.estadistica}
					style={{
						borderRight: "none",
					}}
				>
					<Estadistic
						idioma={idioma}
						end={12}
						spanish='Países'
						ingles='Countries'
						symbol='+'
						scrollDirection={scrollDirection}
					/>
				</div>
			</div>
		</div>
	);
};

export default BottomSection;
