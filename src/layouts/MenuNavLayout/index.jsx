import { Text } from "@nextui-org/react";
import styles from "./MenuNavLayout.module.css";

const MenuNavLayout = ({ children, titulo, description }) => {
	return (
		<div className={styles.content}>
			<div className={styles.aboutSection}>
				<Text color='currentColor' className={styles.title} h2>
					{titulo}
				</Text>
				<p className={styles.description}>{description}</p>
			</div>
			{children}
		</div>
	);
};

export default MenuNavLayout;
