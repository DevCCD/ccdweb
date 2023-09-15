import { Button, Input } from "@nextui-org/react";
import styles from "../styles/contacto.module.css";
import FormLayout from "./FormLayout";

const TrabajeConNosotrosForm = ({ idioma }) => {
	const styleInput = {
		width: "100%",
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

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
						aria-label='nombres'
						aria-labelledby='aria - nombres'
						placeholder='Nombre'
						name={"nombre"}
						// onChange={handleChange}
						// value={form.nombre}
					/>
					<Input
						bordered
						color='primary'
						borderWeight='light'
						css={styleInput}
						required
						aria-label='apellido'
						aria-labelledby='aria - apellidos'
						placeholder='Apellidos'
						name={"apellido"}
						// onChange={handleChange}
						// value={form.apellido}
					/>
				</div>
				<div className={styles.formGroup}>
					<Input
						bordered
						type={"email"}
						color='primary'
						borderWeight='light'
						css={styleInput}
						required
						aria-label='Email'
						aria-labelledby='aria - Email'
						placeholder='Email'
						name={"email"}
						// onChange={handleChange}
						// value={form.asunto}
					/>
				</div>
				<div className={styles.formGroup}>
					<Input
						bordered
						type='file'
						color='primary'
						borderWeight='light'
						required
						aria-label='file'
						aria-labelledby='aria - file'
						css={styleInput}
					/>
				</div>
				<div className={styles.formGroup}>
					<Button
						// as={"a"}
						type='submit'
						size={"lg"}
						className={styles.submitButton}
						// href={`mailto:${para}?subject=${form.nombre} ${form.apellido} - ${form.asunto}&body=${form.mensaje}`}
					>
						Enviar CV
					</Button>
					{/* <a
						style={{ display: "none" }}
						ref={btnRef}
						href={`mailto:${para}?subject=${form.nombre} ${form.apellido} - ${form.asunto}&body=${form.mensaje}`}
					></a> */}
				</div>
			</form>
		</FormLayout>
	);
};

export default TrabajeConNosotrosForm;
