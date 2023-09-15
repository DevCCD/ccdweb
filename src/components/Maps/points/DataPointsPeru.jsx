import CEI_forma from "../formas/CEI_forma";
import CE_forma from "../formas/CE_forma";
import CPE_forma from "../formas/CPE_forma";
import IC_forma from "../formas/IC_forma";
import IPECI_forma from "../formas/IPECI_forma";
import styles from "../styles/peruMapSvg.module.css";

const DataPointsPeru = () => {
	return (
		<>
			<div className={styles.item}>
				<IPECI_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "34.5%",
					left: "32.5%",
					maxWidth: "1.5rem",
					maxHeight: "1.5rem",
				}}
			>
				<CPE_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "24.2%",
					left: "5%",
					maxWidth: "1.5rem",
					maxHeight: "1.5rem",
				}}
			>
				<CEI_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "32%",
					left: "17.2%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
				}}
			>
				<CE_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "46.9%",
					left: "24.8%",
					maxWidth: "1.75rem",
					maxHeight: "1.75rem",
				}}
			>
				<IPECI_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "73%",
					left: "40.5%",
					maxWidth: "1.75rem",
					maxHeight: "1.75rem",
				}}
			>
				<IPECI_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "72.4%",
					left: "62.5%",
					maxWidth: "1.75rem",
					maxHeight: "1.75rem",
				}}
			>
				<IPECI_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "65.4%",
					left: "65.5%",
					maxWidth: "1.75rem",
					maxHeight: "1.75rem",
				}}
			>
				<IPECI_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "88.4%",
					left: "79.1%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
				}}
			>
				<IC_forma />
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "83%",
					left: "68.1%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
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
					"--size": "calc(0.2rem + 5vw)",
					top: "26%",
					left: "22.1%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
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
					"--size": "calc(0.2rem + 5vw)",
					top: "61.3%",
					left: "82%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#0070c0" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "78%",
					left: "86%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#e46c0a" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "73.4%",
					left: "53%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#e46c0a" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "67.4%",
					left: "45.5%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#e46c0a" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "60.4%",
					left: "32%",
					maxWidth: "1.5rem",
					maxHeight: "1.5rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#e46c0a" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "48%",
					left: "37.3%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
				}}
			>
				<div
					className={styles.forma}
					style={{ backgroundColor: "#e46c0a" }}
				/>
			</div>
			<div
				className={styles.item}
				style={{
					"--size": "calc(0.2rem + 5vw)",
					top: "32%",
					left: "8%",
					maxWidth: "1.35rem",
					maxHeight: "1.35rem",
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

export default DataPointsPeru;
