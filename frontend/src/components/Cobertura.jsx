import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Country } from "country-state-city";
import styles from "./Cobertura.module.css";

const codigosPermitidos = [
	"GT",
	"AR",
	"BZ",
	"BO",
	"BR",
	"CA",
	"CL",
	"CO",
	"CR",
	"CU",
	"EC",
	"SV",
	"US",
	"HN",
	"MX",
	"NI",
	"PA",
	"PY",
	"PE",
	"DO",
	"UY",
	"VE",
];

const Cobertura = () => {
	const [busqueda, setBusqueda] = useState("");
	const [mensaje, setMensaje] = useState(null);

	const paisesCobertura = useMemo(() => {
		return Country.getAllCountries()
			.filter((pais) => codigosPermitidos.includes(pais.isoCode))
			.sort((a, b) => a.name.localeCompare(b.name, "es"));
	}, []);

	const handleBuscar = (event) => {
		const texto = event.target.value;
		setBusqueda(texto);

		if (texto.trim() === "") {
			setMensaje(null);
			return;
		}

		const encontrado = paisesCobertura.find((pais) =>
			pais.name.toLowerCase().includes(texto.toLowerCase())
		);

		if (encontrado) {
			setMensaje({
				tipo: "exito",
				texto: `Excelente. Tenemos cobertura total en ${encontrado.name}.`,
			});
		} else {
			setMensaje({
				tipo: "error",
				texto: `Por el momento no contamos con cobertura de envios para ${texto}.`,
			});
		}
	};

	return (
		<section className={styles.coverage}>
			<div className={styles.container}>
				<h2 className={styles.title}>Cobertura internacional</h2>
				<p className={styles.lead}>
					Ingresa el pais al que deseas realizar tu envio.
				</p>
				<div className={styles.searchCard}>
					<label className={styles.label} htmlFor="cobertura-pais">
						Escribe tu pais para validar el envio
					</label>
					<div className={styles.inputWrap}>
						<input
							id="cobertura-pais"
							type="text"
							className={styles.input}
							placeholder="Ej. Mexico, Guatemala, Canada"
							value={busqueda}
							onChange={handleBuscar}
						/>
						<span className={styles.inputHint}>Cobertura activa en Americas.</span>
					</div>
					{mensaje && (
						<div
							className={`${styles.message} ${
								mensaje.tipo === "exito"
									? styles.messageSuccess
									: styles.messageError
							}`}
							role="status"
							aria-live="polite"
						>
							{mensaje.texto}
						</div>
					)}
				</div>
				<div className={styles.gridHeader}>
					<h3 className={styles.gridTitle}>Paises con cobertura activa</h3>
					<span className={styles.gridBadge}>
						{paisesCobertura.length} destinos habilitados
					</span>
				</div>
				<div className={styles.carousel}>
					<Swiper
						modules={[Pagination]}
						pagination={{ clickable: true }}
						spaceBetween={16}
						slidesPerView={1.2}
					>
						{paisesCobertura.map((pais) => (
							<SwiperSlide key={pais.isoCode} className={styles.slide}>
								<article className={styles.card}>
									<img
										src={`https://flagcdn.com/w160/${pais.isoCode.toLowerCase()}.png`}
										alt={`Bandera de ${pais.name}`}
										className={styles.flag}
										loading="lazy"
									/>
									<span className={styles.country}>{pais.name}</span>
								</article>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className={styles.grid}>
					{paisesCobertura.map((pais) => (
						<article key={pais.isoCode} className={styles.card}>
							<img
								src={`https://flagcdn.com/w160/${pais.isoCode.toLowerCase()}.png`}
								alt={`Bandera de ${pais.name}`}
								className={styles.flag}
								loading="lazy"
							/>
							<span className={styles.country}>{pais.name}</span>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Cobertura;
