import { motion } from "framer-motion";
import styles from "./styles/navbar.module.css";

const NavMenu = (mouseEnter, mouseLeave, pageMenu, idioma) => {
	return (
		<motion.div
			className={styles.superMenu}
			onMouseEnter={mouseEnter}
			onMouseLeave={mouseLeave}
			initial={{ opacity: 0, y: 32 }}
			animate={{ opacity: 1, height: 400, y: 0 }}
			exit={{ opacity: 0, y: 32 }}
			transition={{
				type: "spring",
				duration: 0.25,
			}}
		>
			<motion.div className={`${styles.superMenu_wrapper}`}>
				<div className={styles.menuInfo}>{pageMenu}</div>
			</motion.div>
		</motion.div>
	);
};

export default NavMenu;
