import { useAtom } from "jotai";
import { useState } from "react";
import { idiomaAtom } from "../../atoms/idiomAtom";
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import PeruIcon from "../Icons/PeruIcon";
import UsaIcon from "../Icons/UsaIcon";
import styles from "./styles/selectIdioma.module.css";

const SelectIdioma = ({ menuPosition, css }) => {
	const [isMenuIdiomaOpen, setIsMenuIdiomaOpen] = useState(false);
	const [idioma, setIdioma] = useAtom(idiomaAtom);

	const handleIdioma = (idioma) => {
		setIdioma(idioma);
		setIsMenuIdiomaOpen(false);
	};

	const idiomas = [
		{
			name: "es",
			icon: <PeruIcon />,
			onClick: () => handleIdioma("es"),
		},
		{
			name: "en",
			icon: <UsaIcon />,
			onClick: () => handleIdioma("en"),
		},
	];

	return (
		<div className={styles.selectIdiomas}>
			<button
				className={
					isMenuIdiomaOpen
						? `${styles.btnNav} ${styles.btnIdiomas} ${styles.active}`
						: `${styles.btnNav} ${styles.btnIdiomas}`
				}
				onClick={() => setIsMenuIdiomaOpen(!isMenuIdiomaOpen)}
				style={css}
			>
				{idioma === "es" ? <PeruIcon /> : <UsaIcon />}
				<ArrowDownIcon size={18} fill={"currentColor"} />
			</button>
			{isMenuIdiomaOpen && (
				<div
					className={styles.menuIdioma}
					style={{
						...(menuPosition === "top" && {
							bottom: "calc(100% + .25rem)",
						}),
					}}
				>
					{idiomas.map((idioma, i) => (
						<button
							key={i}
							className={styles.itemIdioma}
							onClick={idioma.onClick}
						>
							{idioma.icon}
							<span>{idioma.name.toUpperCase()}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectIdioma;
