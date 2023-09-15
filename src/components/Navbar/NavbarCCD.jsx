import Link from "next/link";
import styles from "./styles/navbarCCD.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import HomePagaMenu from "./pagesMenu/HomePagaMenu";
import NosotrosPageMenu from "./pagesMenu/NosotrosPageMenu";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../atoms/idiomAtom";
import { ChevronDownIcon } from "../Icons/icons";
import MoonIcon from "../Icons/MoonIcon";
import useMediaQuery from "../../hooks/useMediaQuery";
import { BrandCCD } from "../Icons/Brands";
import SearchIcon from "../Icons/Interface/SearchIcon";
import MenuButton from "./MenuButton";
import SelectIdioma from "../SelectIdioma";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import SunIcon from "../Icons/SunIcon";
import { activeNavAtom, menuNavPhoneAtom } from "../../atoms/navbarAtom";
import ServicePageMenu from "./pagesMenu/ServicePageMenu";
import { scroller } from "react-scroll";
import NavMenuPhone from "./NavMenuPhone";

const Navbar = ({ isTablet }) => {
	const { theme, setTheme } = useNextTheme();
	const { isDark } = useTheme();
	const toogleTheme = () => {
		setTheme(isDark ? "light" : "dark");
	};

	const router = useRouter();
	const pathActual = "/" + router.pathname.split("/")[1];

	const [indexSlide, setIndexSlide] = useState(pathActual);
	const [menuInfo, setMenuInfo] = useState(null);
	const [idioma] = useAtom(idiomaAtom);

	const [isMenuOpen, setIsMenuOpen] = useAtom(activeNavAtom);
	const [menuPhone, setMenuPhone] = useAtom(menuNavPhoneAtom);
	// const [isPhone, setIsPhone] = useMediaQuery("(max-width: 768px)");

	const [activeNavbar, setActiveNavbar] = useState(false);

	const cambiarBackgroundNavbar = () => {
		window.scrollY > 10 ? setActiveNavbar(true) : setActiveNavbar(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", cambiarBackgroundNavbar);
	}, []);

	const handleSlide = (index, component) => {
		setIndexSlide(index);
		mouseEnter();
		setMenuInfo(component);
	};

	const handleLeave = () => {
		mouseLeave();
	};

	const mouseEnter = () => {
		setIsMenuOpen(true);
	};

	const mouseLeave = () => {
		setIsMenuOpen(false);
	};

	useEffect(() => {
		if (menuPhone && isTablet) {
			// DESACTIVAR SCROLL
			document.body.style.overflow = "hidden";
		} else {
			// ACTIVAR SCROLL
			document.body.style.overflow = "auto";
			setMenuPhone(false);
		}
	}, [menuPhone, isTablet]);

	const scrollTo = (component) => {
		scroller.scrollTo(component, {
			duration: 500,
			delay: 0,
			smooth: "easeInOutQuart",
			offset: -50,
		});
	};

	const handleScroll = (e) => {
		setIsMenuOpen(false);
		if (router.pathname !== "/") {
			router.push("/").then(() => {
				setTimeout(() => {
					scrollTo(e);
				}, 100);
			});
		} else {
			scrollTo(e);
		}
	};

	// ya sabes mano esta parte es esencial para el ejemplo
	// useEffect(() => {
	// 	if (!isMenuOpen) {
	// 		setMenuInfo(null);
	// 		setIndexSlide(pathActual);
	// 	}
	// 	if (!menuInfo) {
	// 		setIsMenuOpen(false);
	// 	}
	// }, [isMenuOpen]);

	// useEffect(() => {
	// 	obtenerPrimerRutaDelPath(pathActual);
	// }, [router]);

	// const obtenerPrimerRutaDelPath = () => {
	// 	console.log("/" + router.pathname.split("/")[1]);
	// };

	const routesPage = [
		{
			name: idioma === "es" ? "Inicio" : "Home",
			url: "/",
			onMouseEnter: () =>
				handleSlide(
					"/",
					<HomePagaMenu handleScroll={handleScroll} idioma={idioma} />
				),
			onmouseleave: () => handleLeave(),
		},
		{
			name: idioma === "es" ? "Nosotros" : "About",
			url: "/nosotros",
			onMouseEnter: () =>
				handleSlide("/nosotros", <NosotrosPageMenu idioma={idioma} />),
			onmouseleave: () => handleLeave(),
		},
		{
			name: idioma === "es" ? "Nuestro Trabajo" : "Our Work",
			url: "/servicios",
			onMouseEnter: () =>
				handleSlide("/servicios", <ServicePageMenu idioma={idioma} />),
			onmouseleave: () => handleLeave(),
		},
	];

	return (
		<>
			<div
				className={
					activeNavbar
						? `${styles.navbar} ${styles.active}`
						: `${styles.navbar}`
				}
			>
				<div className={styles.wrapperNav}>
					<div className={styles.content}>
						<div className={styles.left}>
							<Link href={"/"} className={styles.logoCompact}>
								<BrandCCD height={42} />
							</Link>
							<button
								className={styles.btnNav}
								style={{
									padding: 0,
									minWidth: 40,
								}}
							>
								<SearchIcon size={20} />
							</button>
						</div>
						{!isTablet ? (
							<ul className={styles.nav}>
								{routesPage.map((slide, index) => (
									<li
										key={index}
										className={styles.navItem}
										onMouseEnter={slide.onMouseEnter}
										onMouseLeave={slide.onmouseleave}
										onClick={() => {
											isMenuOpen
												? slide.onmouseleave()
												: slide.onMouseEnter();
										}}
									>
										<div
											className={styles.navLink}
											style={{
												color:
													indexSlide === slide.url &&
													isMenuOpen
														? "var(--primary-color)"
														: "currentColor",
												transition: "all 0.15s ease",
											}}
										>
											{slide.name}
											<ChevronDownIcon
												fill={"currentColor"}
												size={16}
												strokeWidth={2}
												style={{
													transform:
														indexSlide ===
															slide.url &&
														isMenuOpen
															? "rotate(180deg)"
															: "rotate(0deg)",
													transition:
														"transform 0.15s ease",
												}}
											/>
										</div>
										{/* {slide.url === indexSlide && (
											<motion.div
												layoutId='underline'
												className={styles.underline}
											/>
										)} */}
									</li>
								))}

								<li className={styles.navItem}>
									<div
										onClick={() => {
											handleScroll("contacto");
										}}
										className={styles.navItem}
									>
										<div className={styles.navLink}>
											{idioma === "es"
												? "Contacto"
												: "Contact"}
										</div>
									</div>
								</li>
							</ul>
						) : (
							<div className={styles.centerBrand}>
								<Link href={"/"} className={styles.logoCompact}>
									<BrandCCD height={36} />
								</Link>
							</div>
						)}
						<div className={styles.right}>
							{!isTablet ? (
								<>
									<button
										className={`${styles.btnNav} ${styles.btnTheme}`}
										onClick={toogleTheme}
									>
										{!isDark ? (
											<MoonIcon
												fill={"currentColor"}
												size={18}
											/>
										) : (
											<SunIcon
												fill={"currentColor"}
												size={18}
											/>
										)}
									</button>
									<SelectIdioma />
									<button className={styles.btnNav}>
										<SearchIcon
											fill={"currentColor"}
											size={18}
										/>
									</button>
								</>
							) : (
								<MenuButton />
							)}
						</div>
					</div>
				</div>
				<AnimatePresence>
					{!isTablet && isMenuOpen && (
						<motion.div
							className={styles.superMenu}
							onMouseEnter={mouseEnter}
							onMouseLeave={mouseLeave}
							initial={{ opacity: 0, y: 32 }}
							animate={{ opacity: 1, height: "auto", y: 0 }}
							exit={{ opacity: 0, y: 32 }}
							transition={{
								type: "spring",
								duration: 0.25,
							}}
						>
							<motion.div
								className={`${styles.superMenu_wrapper}`}
							>
								<div className={styles.menuInfo}>
									{menuInfo}
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>

				<AnimatePresence>
					{isTablet && menuPhone && (
						<motion.div
							className={styles.overlayCTMR}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{
								type: "spring",
								duration: 0.35,
							}}
							// onTap={() => setMenuPhone(false)}
						>
							<NavMenuPhone
								handleScroll={handleScroll}
								idioma={idioma}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Navbar;
