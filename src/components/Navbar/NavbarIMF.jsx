import Link from "next/link";
import css from "./styles/navbarIMF.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { BrandCCD } from "../Icons/Brands";
import { useAtom } from "jotai";
import { idiomaAtom } from "../../atoms/idiomAtom";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import HomePagaMenu from "./pagesMenu/HomePagaMenu";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "../Icons/SunIcon";
import SelectIdioma from "../SelectIdioma";
import NosotrosPageMenu from "./pagesMenu/NosotrosPageMenu";
import ServicePageMenu from "./pagesMenu/ServicePageMenu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { activeNavAtom } from "../../atoms/navbarAtom";
import { ChevronDownIcon } from "../Icons/icons";
import { socials } from "../../data";
import { SearchIcon } from "../Icons/Interface";
import MyDevelopmentPageMenu from "./pagesMenu/MyDevelopmentPageMenu";

const NavbarIMF = ({ isTablet }) => {
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
	const [isNavbarTop, setIsNavbarTop] = useState(false);

	const cambiarBackgroundNavbar = () => {
		window.scrollY > 82 ? setIsNavbarTop(true) : setIsNavbarTop(false);
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
		{
			name: idioma === "es" ? "Mi Desarrollo" : "My Development",
			url: "/desarrollo",
			onMouseEnter: () =>
				handleSlide("/desarrollo", <MyDevelopmentPageMenu idioma={idioma} />),
			onmouseleave: () => handleLeave(),
		},
/* 		{
			name: idioma === "es" ? "3D" : "3D",
			url: "/tresd",
			onMouseEnter: () =>
				handleSlide("/tresd", <TresdPageMenu idioma={idioma} />),
			onmouseleave: () => handleLeave(),
		}, */
	];

	// ya sabes mano esta parte es esencial para el ejemplo
	useEffect(() => {
		if (!isMenuOpen) {
			setMenuInfo(null);
			setIndexSlide(pathActual);
		}
		if (!menuInfo) {
			setIsMenuOpen(false);
		}
	}, [isMenuOpen]);

	return (
		<>
			<div className={css.navbar}>
				<div className={css.wrapper}>
					<div className={css.midbar}>
						<div className={css.left}>
							<div className={css.socials}>
								{socials.map((social, index) => {
									return (
										<Link
											className={css.social}
											key={index}
											href={social.url}
											target='_blank'
											rel='noreferrer'
										>
											{social.icon}
										</Link>
									);
								})}
							</div>
						</div>
						<div className={css.center}>
							<Link href='/' className={css.logoCCD}>
								<BrandCCD height={42} />
							</Link>
						</div>
						<div className={css.right}>
							<button
								className={`${css.btnNav} ${css.btnTheme}`}
								onClick={toogleTheme}
							>
								{!isDark ? (
									<MoonIcon fill={"currentColor"} size={18} />
								) : (
									<SunIcon fill={"currentColor"} size={18} />
								)}
							</button>
							<SelectIdioma />
							{/* <button className={css.btnNav}>
								<SearchIcon fill={"currentColor"} size={18} />
							</button> */}
						</div>
					</div>
				</div>
			</div>
			<div
				className={
					isNavbarTop
						? `${css.navigation} ${css.active}`
						: css.navigation
				}
			>
				<div className={css.bottombar}>
					<div className={css.wrapper}>
						<div className={css.left}>
							<AnimatePresence initial={false} mode='wait'>
								{isNavbarTop && (
									<motion.div
										initial={{ opacity: 0, x: -60 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0 }}
									>
										<Link href='/' className={css.logoCCD}>
											<BrandCCD height={42} />
										</Link>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<nav className={css.menu}>
							<ul className={css.menu_list}>
								{routesPage.map((slide, index) => (
									<li
										key={index}
										className={css.navItem}
										onMouseEnter={slide.onMouseEnter}
										onMouseLeave={slide.onmouseleave}
										onClick={() => {
											isMenuOpen
												? slide.onmouseleave()
												: slide.onMouseEnter();
										}}
									>
										<div
											className={css.navLink}
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
									</li>
								))}
								<li className={css.navItem}>
									<div
										onClick={() => {
											handleScroll("contacto");
										}}
										className={css.navLink}
									>
										{idioma === "es"
											? "Contacto"
											: "Contact"}
									</div>
								</li>
							</ul>
						</nav>
						<div className={css.right}>
							<AnimatePresence initial={false} mode='wait'>
								{isNavbarTop && (
									<motion.div
										initial={{ opacity: 0, x: 60 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0 }}
										style={{ display: "flex" }}
									>
										<button
											className={`${css.btnNav} ${css.btnTheme}`}
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
										{/* <button className={css.btnNav}>
											<SearchIcon
												fill={"currentColor"}
												size={18}
											/>
										</button> */}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				</div>
				<AnimatePresence>
					{!isTablet && isMenuOpen && (
						<motion.div
							className={css.superMenu}
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
							<motion.div className={`${css.superMenu_wrapper}`}>
								<div className={css.menuInfo}>{menuInfo}</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default NavbarIMF;
