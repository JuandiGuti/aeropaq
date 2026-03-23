import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Services.module.css";

export default function Services() {
	const listaServicios = [
		{
			id: 1,
			titulo: "Envíos Nacionales",
			desc: "Llegamos a cada rincón del país con rutas diarias.",
			img: "https://images.unsplash.com/photo-1620455800201-7f00aeef12ed?q=80&w=687",
		},
		{
			id: 2,
			titulo: "Envíos Internacionales",
			desc: "Conectamos tu negocio con todo el continente.",
			img: "https://images.unsplash.com/photo-1665600292329-abab212a031f?q=80&w=1170",
		},
		{
			id: 3,
			titulo: "Recolección a Domicilio",
			desc: "Ahorra tiempo. Vamos hasta la puerta de tu casa.",
			img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=765",
		},
		{
			id: 4,
			titulo: "Servicio Expréss",
			desc: "Entregas urgentes garantizadas en tiempo récord.",
			img: "https://images.unsplash.com/photo-1665521032636-e8d2f6927053?q=80&w=1170",
		},
	];

	return (
		<section className={styles.services}>
			<div className={styles.container}>
				<h2 className={styles.title}>Nuestros Servicios</h2>
        {/* Carousel para celular */}
				<div className={styles.carousel}>
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={16}
						slidesPerView={1.05}
					>
						{listaServicios.map((servicio) => (
							<SwiperSlide key={servicio.id} className={styles.slide}>
								<article className={styles.card}>
									<img
										src={servicio.img}
										alt={servicio.titulo}
										className={styles.cardImage}
									/>
									<div className={styles.cardShade} />
									<div className={styles.cardContent}>
										<h3 className={styles.cardTitle}>{servicio.titulo}</h3>
										<p className={styles.cardText}>{servicio.desc}</p>
									</div>
								</article>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
        {/* Grid para escritorio */}
				<div className={styles.grid}>
					{listaServicios.map((servicio) => (
						<article key={servicio.id} className={styles.card}>
							<img
								src={servicio.img}
								alt={servicio.titulo}
								className={styles.cardImage}
							/>
							<div className={styles.cardShade} />
							<div className={styles.cardContent}>
								<h3 className={styles.cardTitle}>{servicio.titulo}</h3>
								<p className={styles.cardText}>{servicio.desc}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}