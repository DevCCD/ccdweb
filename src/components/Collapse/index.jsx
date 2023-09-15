import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./styles/collapse.module.css";

const Collapse = ({ children, title, isActive, border }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		margin: "0px 0px -400px 0px",
	});
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isActive && isInView) {
			setIsOpen(true);
		}
	}, [isActive, isInView]);

	// useEffect(() => {
	// 	console.log("Element is in view: ", isInView);
	// }, [isInView]);

	return (
		<div className={styles.collapse}>
			<div
				className={styles.collapseHeader}
				onClick={() => setIsOpen(!isOpen)}
				style={{
					borderBottom: border
						? "1px solid var(--backgroundAccent)"
						: "none",
				}}
				ref={ref}
			>
				{title}
				<div className={styles.collapseIcon}>
					<motion.div
						className={styles.trigger}
						initial={{ rotate: 0 }}
						animate={{ rotate: isOpen ? 180 : 0 }}
					>
						<div className={styles.bar}></div>
						<motion.div
							className={styles.bar2}
							initial={{ rotate: 90 }}
							animate={{ rotate: isOpen ? 0 : 90 }}
							transition={{ duration: 0.25 }}
						></motion.div>
					</motion.div>
				</div>
			</div>
			<motion.div
				className={styles.collapseContent}
				initial={{ height: 0 }}
				animate={{ height: isOpen ? "auto" : 0 }}
			>
				<div className={styles.contentWrapper}>{children}</div>
			</motion.div>
		</div>
	);
};

export default Collapse;
