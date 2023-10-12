import { Button, Input, Textarea } from "@nextui-org/react";
import { useState, useRef, useEffect } from "react";
import styles from "../styles/contacto.module.css";
import FormLayout from "./FormLayout";

const ContactenosForm = ({ idioma }) => {
	const btnRef = useRef(null);

	const [form, setForm] = useState({
		nombre: "",
		apellido: "",
		asunto: "",
		mensaje: "",
	});

	const [error, setError] = useState(false);

	const [isVoid, setIsVoid] = useState(false);

	const styleInput = {
		width: "100%",
	};

	useEffect(() => {
		if (
			form.nombre !== "" &&
			form.apellido !== "" &&
			form.asunto !== "" &&
			form.mensaje !== ""
		) {
			setIsVoid(true);
		} else {
			setIsVoid(false);
		}
	}, [form]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			form.nombre === "" ||
			form.apellido === "" ||
			form.asunto === "" ||
			form.mensaje === ""
		) {
			setError(true);
			return;
		}
		setError(false);
		btnRef.current.click();
	};

	const para = "melissa.sanchez@competitividadccd.com";

	return (
		<FormLayout idioma={idioma}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.dualGrid}>
					<Input
						bordered
						color='primary'
						borderWeight='light'
						css={styleInput}
						required
						aria-label='Nombre'
						aria-labelledby='aria - Nombre'
						placeholder={idioma === "es" ? "Nombre" : "Name"}
						name={"nombre"}
						onChange={handleChange}
						value={form.nombre}
					/>
					<Input
						bordered
						color='primary'
						borderWeight='light'
						css={styleInput}
						required
						aria-label='apellido'
						aria-labelledby='aria - apellido'
						placeholder={idioma === "es" ? "Apellidos" : "Last names"}
						name={"apellido"}
						onChange={handleChange}
						value={form.apellido}
					/>
				</div>
				<div className={styles.formGroup}>
					<Input
						bordered
						color='primary'
						borderWeight='light'
						css={styleInput}
						required
						aria-label='Asunto'
						aria-labelledby='aria - Asunto'
						placeholder={idioma === "es" ? "Asunto" : "Subject"}
						name={"asunto"}
						onChange={handleChange}
						value={form.asunto}
					/>
				</div>
				<div className={styles.formGroup}>
					<Textarea
						aria-label='Mensaje'
						aria-labelledby='aria - Mensaje'
						placeholder={idioma === "es" ? "Mensaje" : "Message"}
						bordered
						color='primary'
						borderWeight='light'
						css={styleInput}
						required
						minRows={8}
						onChange={handleChange}
						name={"mensaje"}
						value={form.mensaje}
					/>
				</div>
				<div className={styles.formGroup}>
					<Button
						// as={"a"}
						type='submit'
						size={"lg"}
						className={styles.submitButton}
						disabled={!isVoid}
						// href={`mailto:${para}?subject=${form.nombre} ${form.apellido} - ${form.asunto}&body=${form.mensaje}`}
					>
						{idioma === "es" ? "Enviar Mensaje" : "Send Message"}
					</Button>
					<a
						style={{ display: "none" }}
						ref={btnRef}
						href={`mailto:${para}?subject=${form.nombre} ${form.apellido} - ${form.asunto}&body=${form.mensaje}`}
					></a>
				</div>
			</form>
		</FormLayout>
	);
};

export default ContactenosForm;
