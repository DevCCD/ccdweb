import CE_forma from "../formas/CE_forma";
import IPECI_forma from "../formas/IPECI_forma";
import styles from "../styles/peruMapSvg.module.css";

const DataPointsWorld = () => {
	return (
		<>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 2.1vw)",
					top: "71.5%",
					left: "22.5%",
					maxWidth: "1.5rem",
					maxHeight: "1.5rem",
				}}
			>
				<IPECI_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 2vw)",
					top: "79.5%",
					left: "24.5%",
					maxWidth: "1.45rem",
					maxHeight: "1.45rem",
				}}
			>
				<CE_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.5vw)",
					top: "64.7%",
					left: "22%",
					maxWidth: "1.25rem",
					maxHeight: "1.25rem",
				}}
			>
				<CE_forma fillLeft='#C00002' />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 2vw)",
					top: "59.1%",
					left: "15.2%",
					maxWidth: "1.45rem",
					maxHeight: "1.45rem",
				}}
			>
				<CE_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.85vw)",
					top: "58%",
					left: "29%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.85vw)",
					top: "36%",
					left: "15%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.85vw)",
					top: "48.4%",
					left: "41.6%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.85vw)",
					top: "79.7%",
					left: "55.9%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.85vw)",
					top: "76.7%",
					left: "82.2%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.5vw)",
					top: "57.6%",
					left: "67.8%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.5vw)",
					top: "51.5%",
					left: "73.5%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.1rem + 1.35vw)",
					top: "57.9%",
					left: "72.7%",
					maxWidth: "1.4rem",
					maxHeight: "1.4rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#00b050" }}
				/>
			</div>
		</>
	);
};

export default DataPointsWorld;
