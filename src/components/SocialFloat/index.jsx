import Link from "next/link";
import WhatsAppIcon from "../Icons/WhatsAppIcon";
import styles from "./styles/SocialFloat.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GmailIcon from "../Icons/GmailIcon";
import useMediaQuery from "../../hooks/useMediaQuery";
import { contactNumber, facebookUrl, linkedinUrl } from "../../data";
import { useAtom } from "jotai";
import { scrollUpAtom } from "../../atoms/scrollUpAtom";
import ScrollUp from "../ScrollUp";

const SocialFloat = () => {
	const [isHover, setIsHover] = useState(true);
	const isPhone = useMediaQuery("(max-width: 768px)");
	const [isMounted, setIsMounted] = useState(false);
	const [activeScroll, setActiveScroll] = useAtom(scrollUpAtom);

	const handleMouseEnter = () => {
		if (!isPhone) {
			setIsHover(true);
		}
	};

	const handleMouseLeave = () => {
		setIsHover(false);
	};

	useEffect(() => {
		setIsMounted(true);
		setTimeout(() => {
			if (isHover === true) {
				setIsHover(true);
			}
			setIsHover(false);
		}, 2000);
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 750) {
			setActiveScroll(true);
		} else {
			setActiveScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const Socials = [
		{
			name: "Facebook",
			href: facebookUrl,
			icon: <FacebookIcon fill={"#0075fa"} size={56} />,
			className: styles.facebook,
		},
		{
			name: "LinkedIn",
			href: linkedinUrl,
			icon: <LinkedinIcon fill={"#fff"} size={32} />,
			className: styles.linkedin,
		},
		{
			name: "Correo",
			href: "mailto:melissa.sanchez@competitividadccd.com",
			icon: <GmailIcon size={26} fill={"var(--primary-color"} />,
			className: styles.mail,
		},
	];

	const SocialItem = ({ href, icon, className, name }) => {
		return (
			<motion.a
				href={href}
				target='_blank'
				rel='noreferrer'
				className={`${styles.socialBtn} ${className}`}
				whileHover={{ scale: 1.04 }}
				whileTap={{ scale: 0.9 }}
				title={name}
			>
				{icon}
			</motion.a>
		);
	};

	return (
		<>
			<div className={styles.container}>
				<motion.div
					className={styles.socialFloat}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{!isPhone && (
						<motion.div
							className={styles.moreSocials}
							transition={{
								delay: 0.5,
								type: "spring",
								mass: 0.3,
							}}
						>
							<AnimatePresence>
								{isHover && (
									<>
										{Socials.map((social, i) => (
											<motion.div
												key={i}
												initial={{
													opacity: 1,
													y: 68 + i * 60,
												}}
												animate={{ opacity: 1, y: 0 }}
												transition={{
													delay: i * 0.25,
													type: "spring",
													mass: 0.3,
												}}
												exit={{
													opacity: 1,
													y: 68 + i * 60,
												}}
											>
												<SocialItem {...social} />
											</motion.div>
										))}
									</>
								)}
							</AnimatePresence>
						</motion.div>
					)}
					<motion.a
						href={`https://wa.me/51${contactNumber}?text=Hola, Centro para la Competitividad y el Desarrollo. Quisiera información sobre sus servicios`}
						target='_blank'
						rel='noreferrer'
						className={`${styles.socialBtn} ${styles.whatsapp}`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						style={{
							animationName: isHover ? "none" : styles.ondaVital,
						}}
					>
						<WhatsAppIcon size={26} />
					</motion.a>
				</motion.div>
				<AnimatePresence>
					{activeScroll && (
						<motion.div
							className={styles.upContainer}
							initial={{
								translateY: 100,
								opacity: 1,
								height: 0,
							}}
							animate={{
								translateY: 0,
								opacity: 1,
								height: 56 + 10,
							}}
							exit={{
								translateY: 100,
								opacity: 1,
								height: 0,
							}}
						>
							<ScrollUp onClick={scrollToTop} />
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default SocialFloat;
