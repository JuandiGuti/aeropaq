import { useState } from "react";
import styles from "./Faq.module.css";

export default function Faq() {
	const [openId, setOpenId] = useState(null);
	const listaFaq = [
		{
			id: 1,
			pregunta: "¿Cuánto tiempo tarda un envío nacional?",
			respuesta:
				"Normalmente toma entre 1 y 2 días hábiles, dependiendo de si el destino es dentro de la misma ciudad o en otro departamento.",
		},
		{
			id: 2,
			pregunta: "¿Cómo puedo rastrear mi paquete?",
			respuesta:
				"Al momento de procesar tu envío, te enviaremos un número de guía a tu correo electrónico para que puedas seguir el trayecto paso a paso.",
		},
		{
			id: 3,
			pregunta: "¿Qué artículos están restringidos?",
			respuesta:
				"Por políticas de seguridad, no aceptamos explosivos, líquidos inflamables, armas, dinero en efectivo o sustancias ilegales.",
		},
		{
			id: 4,
			pregunta: "¿El servicio de recolección tiene costo extra?",
			respuesta:
				"Sí, la recolección a domicilio tiene un recargo de Q15.00, pero te ahorra el viaje a nuestras sucursales.",
		},
	];

	const toggleFaq = (id) => {
		setOpenId((prevId) => (prevId === id ? null : id));
	};

	return (
		<section className={styles.faq}>
			<div className={styles.container}>
				<h2 className={styles.title}>Preguntas Frecuentes</h2>
				<div className={styles.grid}>
					{listaFaq.map((item) => {
						const isOpen = openId === item.id;

						return (
							<article key={item.id} className={styles.card}>
								<button
									type="button"
									className={styles.questionButton}
									onClick={() => toggleFaq(item.id)}
									aria-expanded={isOpen}
									aria-controls={`faq-panel-${item.id}`}
									id={`faq-button-${item.id}`}
								>
									<span>{item.pregunta}</span>
									<span className={styles.icon} aria-hidden="true">
										{isOpen ? "-" : "+"}
									</span>
								</button>
								<div
									id={`faq-panel-${item.id}`}
									className={`${styles.answerWrapper} ${
										isOpen ? styles.open : ""
									}`}
									role="region"
									aria-labelledby={`faq-button-${item.id}`}
								>
									<p className={styles.answer}>{item.respuesta}</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}