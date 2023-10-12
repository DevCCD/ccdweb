import { Button, Input } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/contacto.module.css";
import FormLayout from "./FormLayout";

const TrabajeConNosotrosForm = ({ idioma }) => {
	const styleInput = {
		width: "100%",
	};

	const btnRef = useRef(null);

	const [error, setError] = useState(false);

	const [isVoid, setIsVoid] = useState(false);

	const [form, setForm] = useState({
		nombre: "",
		apellido: "",
		email: ""
	});

	useEffect(() => {
		if (
			form.nombre !== "" &&
			form.apellido !== "" &&
			form.email !== ""
		) {
			setIsVoid(true);
		} else {
			setIsVoid(false);
		}
	}, [form]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			form.nombre === "" ||
			form.apellido === "" ||
			form.email === ""
		) {
			setError(true);
			return;
		}
		setError(false);
		btnRef.current.click();
	};


	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const para = "melissa.sanchez@competitividadccd.com";

	return (
		<FormLayout idioma={idioma}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.dualGrid}>
					<Input 
						bordered
						color="primary"
						borderWeight="light"
						css={styleInput}
						required
						aria-label='Nombre'
						aria-labelledby="aria - Nombre"
						placeholder={idioma === "es" ? "Nombre" : "Name"}
						name={"nombre"}
						onChange={handleChange}
						value={form.nombre}
					/>
					<Input 
						bordered
						color="primary"
						borderWeight="light"
						css={styleInput}
						required
						aria-label='Apellido'
						aria-labelledby="aria - Apellido"
						placeholder={idioma === "es" ? "Apellidos" : "Last names"}
						name={"apellido"}
						onChange={handleChange}
						value={form.apellido}
					/>
				</div>
				<div className={styles.formGroup}>
					<Input
						bordered
						color="primary"
						borderWeight="light"
						css={styleInput}
						required
						aria-label='Email'
						aria-labelledby='aria - Email'
						placeholder='Email'
						name={"email"}
						onChange={handleChange}
						value={form.email}
					/>
					<label style={{ fontSize : "0.8rem", color : "gray"}}>
						{idioma === "es"
								? "No olvide adjuntar su CV en el correo."
								: "Don't forget to attach your CV in the email."}
					</label>
				</div>
				<div className={styles.formGroup}>
					<Button
						type="submit"
						size={"lg"}
						className={styles.submitButton}
						disabled={!isVoid}
					>
						{idioma === "es" ? "Enviar CV" : "Send CV"}
					</Button>
					<a 
						style={{display: "none"}}
						ref={btnRef}
						href={`mailto:${para}?subject= CV ${form.nombre} ${form.apellido} &body=Correo de contacto: ${form.email}`}
						></a>
				</div>
			</form>
		</FormLayout>
	);
};

export default TrabajeConNosotrosForm;