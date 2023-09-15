import { Text } from "@nextui-org/react";
import ThunderIcon from "./ThunderIcon";
import styles from "./styles/almeydaBar.module.css";
import { useState } from "react";

const AlmeydaBar = () => {
	const almeydaLink = "https://www.linkedin.com/in/anderson-almeyda-torres/";

	const goTodirection = () => {
		window.open(almeydaLink, "_blank");
	};

	return (
		<button className={styles.almeydaBar} onClick={goTodirection}>
			<div className={styles.byAlmeyda}>
				<Text weight={"medium"} className={styles.powered}>
					Powered by
				</Text>
				<ThunderIcon />
				<Text weight={"medium"} className={styles.almeyda}>
					CCD Tech
				</Text>
			</div>
		</button>
	);
};

export default AlmeydaBar;
