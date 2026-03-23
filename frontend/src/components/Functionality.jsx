import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Functionality.module.css";

export default function Functionality() {
	const pasos = [
		{
			id: 1,
			titulo: "Solicitud",
			desc: "Usa nuestro cotizador web, verifica el precio y solicita tu envio en minutos.",
		},
		{
			id: 2,
			titulo: "Recoleccion",
			desc: "Nuestro equipo recoge el paquete directamente en tu ubicacion programada.",
		},
		{
			id: 3,
			titulo: "Despacho",
			desc: "Procesamos, aseguramos y enviamos tu paquete a traves de nuestra red logistica.",
		},
		{
			id: 4,
			titulo: "Entrega",
			desc: "El destinatario recibe el paquete de forma segura y a tiempo.",
		},
	];

	return (
		<section className={styles.functionality}>
			<div className={styles.container}>
				<h2 className={styles.title}>Como funciona</h2>
				<p className={styles.lead}>
					Un proceso simple y transparente, desde tu pantalla hasta las manos del
					destinatario.
				</p>
				<div className={styles.carousel}>
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={16}
						slidesPerView={1.05}
					>
						{pasos.map((paso) => (
							<SwiperSlide key={paso.id} className={styles.slide}>
								<article className={styles.card}>
									<div className={styles.stepCircle}>{paso.id}</div>
									<h3 className={styles.cardTitle}>{paso.titulo}</h3>
									<p className={styles.cardText}>{paso.desc}</p>
								</article>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className={styles.grid}>
					{pasos.map((paso) => (
						<article key={paso.id} className={styles.card}>
							<div className={styles.stepCircle}>{paso.id}</div>
							<h3 className={styles.cardTitle}>{paso.titulo}</h3>
							<p className={styles.cardText}>{paso.desc}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
