import { useAtom } from "jotai";
import Head from "next/head";
import { useEffect, useState } from "react";
import { idiomaAtom } from "../atoms/idiomAtom";
import BottomSection from "../components/BottomSection";
import { BrochurePortal, BrochureTrigger } from "../components/Brochure";
import Footer from "../components/Footer";
import { NavbarCCD, NavbarIMF } from "../components/Navbar";
import { MapInfoSection } from "../components/Sections/home";
import SocialFloat from "../components/SocialFloat";
import useMediaQuery from "../hooks/useMediaQuery";
import { useTheme } from "next-themes";

const MainLayout = ({ children, title, description }) => {
	const { theme } = useTheme();
	const [idioma] = useAtom(idiomaAtom);
	const isTablet = useMediaQuery("(max-width: 890px)");
	const favicon =
		theme === "dark"
			? "/assets/images/logos/favicon_dark/favicon.ico"
			: "/assets/images/logos/favicon_light/favicon.ico";

	return (
		<>
			<Head>
				<title>{`CCD | ${title}`}</title>
				<meta charSet='UTF-8' />
				<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='description' content='CCD PROJECT' />
				<link rel='icon' href={favicon} />
			</Head>
			<NavbarCCD isTablet={isTablet} />
			<NavbarIMF {...{ isTablet }} />
			{/* <BrochureTrigger idioma={idioma} /> */}
			<BrochurePortal />
			<main id='__ccd'>{children}</main>
			{/* <SocialFloat /> */}
			<MapInfoSection idioma={idioma} />
			<BottomSection idioma={idioma} />
			<Footer idioma={idioma} />
		</>
	);
};

MainLayout.defaultProps = {
	title: "Centro para la Competitividad y el Desarrollo",
};

export default MainLayout;
