import { useAtom } from "jotai";
import { menuNavPhoneAtom } from "../../../atoms/navbarAtom";
import styles from "../styles/navMenuPhone.module.css";
import LayoutPhoneMenu from "./Layout";

const MyDevelopmentPageMenuPhone = ({ title, idioma }) => {
	const [, setMenuPhone] = useAtom(menuNavPhoneAtom);

	const data = [
		{
			href: "/desarrollo/grafico",
			title:
				idioma === "es"
					? "Gráficos"
					: "Graphics",
			description:
				idioma === "es"
					? "Descripción."
					: "Description.",
		},
		{
			href: "/desarrollo/regiones",
			title:
				idioma === "es"
					? "Regiones graficos"
					: "Graphics regions",
			description:
				idioma === "es"
					? "Descripción."
					: "Description.",
		},
	];

	return (
		<LayoutPhoneMenu title={title} backIndex indice={"0"}>
			<LayoutPhoneMenu.Card>
				<nav className={styles.navmenu}>
					<ul>
						{data.map((route, index) => (
							<li key={index}>
								<LayoutPhoneMenu.Item
									// onClick={route.onClick}
									type='link'
									href={route.href}
									titulo={route.title}
									onClick={() => {
										setMenuPhone(false);
									}}
									description={route.description}
								/>
							</li>
						))}
					</ul>
				</nav>
			</LayoutPhoneMenu.Card>
		</LayoutPhoneMenu>
	);
};

export default MyDevelopmentPageMenuPhone;
