import LineSvg from "../LineSvg";
import styles from "./HeaderBanner.module.css";

const HeaderBanner = ({ children, image, titleImage }) => {
	return (
		<div className={styles.container}>
			<div className={styles.bg}>{/* <LineSvg /> */}</div>
			{/* <div className={styles.effectBg}></div> */}
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default HeaderBanner;
