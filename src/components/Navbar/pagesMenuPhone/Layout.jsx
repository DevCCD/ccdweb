import { motion } from "framer-motion";
import ArrowRightIcon from "../../Icons/ArrowRightIcon";
import { ChevronDownIcon } from "../../Icons/icons";
import styles from "../styles/navMenuPhone.module.css";
import { useAtom } from "jotai";
import { menuIndexPhoneAtom } from "../../../atoms/navbarAtom";
import Link from "next/link";

const LayoutPhoneMenu = ({ title, children, backIndex, indice }) => {
	const [indexSlide, setIndexSlide] = useAtom(menuIndexPhoneAtom);

	const handleSlide = (index) => {
		setIndexSlide(index);
	};

	return (
		<motion.div className={`${styles.slide}`}>
			<div className={styles.space}></div>
			<div className={styles.header}>
				<div className={styles.header_wrapper}>
					{backIndex && (
						<motion.button
							className={styles.backbtn}
							whileTap={{ scale: 0.85 }}
							onClick={() => handleSlide(Number(indice))}
						>
							<ArrowRightIcon
								style={{
									transform: "rotate(180deg)",
								}}
								strokeWidth={2.8}
							/>
						</motion.button>
					)}
					<h2>{title || "Titulo de Slide"}</h2>
				</div>
				<div className={styles.keloke}></div>
			</div>
			<div className={styles.wrapper}>
				<div className={styles.content}>{children}</div>
			</div>
		</motion.div>
	);
};

const Card = (props) => {
	const { children } = props;

	return (
		<motion.div
			className={styles.cardMenu}
			initial={{
				y: "100px",
				scale: 0.25,
				opacity: 0,
			}}
			animate={{ y: 0, scale: 1, opacity: 1 }}
			// exit={{
			// 	y: "100px",
			// 	scale: 0.25,
			// 	opacity: 0,
			// }}
			transition={{
				type: "spring",
				duration: 0.35,
				ease: "easeInOut",
			}}
		>
			{children}
		</motion.div>
	);
};

const Item = (props) => {
	const {
		titulo,
		rightcomponent,
		afterarrow,
		icon,
		description,
		type,
		style,
		titlestyle,
	} = props;

	return (
		<>
			{type === "link" ? (
				<Link href={props.href} style={{ color: "currentcolor" }}>
					<motion.button
						className={styles.item}
						whileTap={{
							backgroundColor: "#f5f5f5",
						}}
						style={{
							...style,
							gridTemplateColumns: icon ? "auto 1fr" : "1fr",
						}}
						{...props}
					>
						{icon && <div className={styles.icon}>{icon}</div>}
						<div className={styles.item_label}>
							<div className={styles.item_info}>
								<h4
									style={{
										...titlestyle,
									}}
								>
									{titulo}
								</h4>
								{description && (
									<span className={styles.description}>
										{description}
									</span>
								)}
							</div>
							{!rightcomponent && (
								<ChevronDownIcon
									className={styles.chevron}
									fill='currentColor'
									size={30}
								/>
							)}
						</div>
					</motion.button>
				</Link>
			) : (
				<motion.button
					className={styles.item}
					whileTap={{
						backgroundColor: "#f5f5f5",
					}}
					{...props}
					style={{
						gridTemplateColumns: icon ? "auto 1fr" : "1fr",
						...style,
					}}
				>
					{icon && <div className={styles.icon}>{icon}</div>}
					<div className={styles.item_label}>
						<div className={styles.item_info}>
							<h4
								style={{
									...titlestyle,
								}}
							>
								{titulo}
							</h4>
							{description && (
								<span className={styles.description}>
									{description}
								</span>
							)}
						</div>
						{!rightcomponent ? (
							<div className={styles.arrow_wrap}>
								{afterarrow && afterarrow}
								<ChevronDownIcon
									className={styles.chevron}
									fill='currentColor'
									size={30}
								/>
							</div>
						) : (
							<div className={styles.arrow_wrap}>
								{afterarrow && afterarrow}
								{rightcomponent}
							</div>
						)}
					</div>
				</motion.button>
			)}
		</>
	);
};

LayoutPhoneMenu.Item = Item;
LayoutPhoneMenu.Card = Card;

export default LayoutPhoneMenu;
