import { useMemo, useState } from "react";
import { Country, State } from "country-state-city";
import styles from "./Pricing.module.css";

const paisesPermitidos = [
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

export default function Pricing() {
	const [ruta, setRuta] = useState("");
	const [pais, setPais] = useState("");
	const [depto, setDepto] = useState("");
	const [cotizacion, setCotizacion] = useState(null);
	const [error, setError] = useState("");

	const paisesDisponibles = useMemo(() => {
		return Country.getAllCountries().filter((paisItem) =>
			paisesPermitidos.includes(paisItem.isoCode)
		);
	}, []);

	const handleRuta = (event) => {
		const val = event.target.value;
		setRuta(val);
		setError("");

		if (val === "misma_ciudad") {
			setPais("GT");
			setDepto("GU");
		} else if (val === "otro_departamento") {
			setPais("GT");
			setDepto("");
		} else {
			setPais("");
			setDepto("");
		}
	};

	const calcular = (event) => {
		event.preventDefault();
		setError("");

		const form = new FormData(event.target);
		const peso = parseFloat(form.get("peso"));
		const servicio = form.get("servicio");
		const extras = form.getAll("extras");

		if (!ruta || !pais || !depto || !peso || !servicio) {
			setError("Faltan campos obligatorios (*)");
			return;
		}

		if (peso <= 0) {
			setError("El peso no puede ser 0 o negativo");
			return;
		}

		let base = 0;
		let tiempo = "";

		if (ruta === "misma_ciudad") {
			base = 25;
			tiempo = "1 a 2 dias habiles";
		} else if (ruta === "otro_departamento") {
			base = 45;
			tiempo = "2 a 4 dias habiles";
		} else {
			base = 150;
			tiempo = "5 a 10 dias habiles";
		}

		const costoPeso = peso * 18;
		const factorServicio = servicio === "express" ? 1.5 : 1;

		if (servicio === "express") {
			tiempo = ruta === "internacional" ? "3 a 5 dias habiles" : "Menos de 24 horas";
		}

		let costoExtras = 0;
		if (extras.includes("recoleccion")) costoExtras += 15;
		if (extras.includes("seguro")) costoExtras += 50;

		const total = (base + costoPeso) * factorServicio + costoExtras;

		setCotizacion({
			base: base.toFixed(2),
			peso: costoPeso.toFixed(2),
			extras: costoExtras.toFixed(2),
			total: total.toFixed(2),
			tiempo,
		});
	};

	return (
		<section className={styles.pricing}>
			<div className={styles.container}>
				<h2 className={styles.title}>Calcula tu envio</h2>
				<p className={styles.lead}>
					Ingresa los datos de tu paquete para obtener un estimado inmediato.
				</p>
				<div className={styles.card}>
					{error && <div className={styles.alert}>{error}</div>}
					<form onSubmit={calcular} className={styles.form}>
						<div className={styles.field}>
							<label className={styles.label} htmlFor="pricing-ruta">
								Ruta: *
							</label>
							<select
								id="pricing-ruta"
								name="origenDestino"
								value={ruta}
								onChange={handleRuta}
								className={styles.select}
								required
							>
								<option value="" disabled>
									Selecciona la ruta
								</option>
								<option value="misma_ciudad">Misma ciudad</option>
								<option value="otro_departamento">Otro departamento</option>
								<option value="internacional">Internacional</option>
							</select>
						</div>
						<div className={styles.row}>
							<div className={styles.field}>
								<label className={styles.label} htmlFor="pricing-pais">
									Pais: *
								</label>
								<select
									id="pricing-pais"
									value={pais}
									onChange={(event) => {
										setPais(event.target.value);
										setDepto("");
									}}
									disabled={ruta === "misma_ciudad" || ruta === "otro_departamento"}
									className={styles.select}
									required
								>
									<option value="">Selecciona pais</option>
									{paisesDisponibles.map((paisItem) => (
										<option key={paisItem.isoCode} value={paisItem.isoCode}>
											{paisItem.name}
										</option>
									))}
								</select>
							</div>
							<div className={styles.field}>
								<label className={styles.label} htmlFor="pricing-depto">
									{ruta === "internacional" ? "Estado / Ciudad" : "Departamento"}: *
								</label>
								<select
									id="pricing-depto"
									value={depto}
									onChange={(event) => setDepto(event.target.value)}
									disabled={ruta === "misma_ciudad" || !pais}
									className={styles.select}
									required
								>
									<option value="">Selecciona opcion</option>
									{State.getStatesOfCountry(pais).map((state) => (
										<option key={state.isoCode} value={state.isoCode}>
											{state.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className={styles.field}>
							<label className={styles.label} htmlFor="pricing-peso">
								Peso (lbs): *
							</label>
							<input
								id="pricing-peso"
								name="peso"
								type="number"
								step="0.1"
								placeholder="Ej. 5.5"
								className={styles.input}
								required
							/>
						</div>
						<div className={styles.field}>
							<label className={styles.label} htmlFor="pricing-servicio">
								Servicio: *
							</label>
							<select
								id="pricing-servicio"
								name="servicio"
								defaultValue=""
								className={styles.select}
								required
							>
								<option value="" disabled>
									Selecciona urgencia
								</option>
								<option value="estandar">Estandar</option>
								<option value="expres">Expres</option>
							</select>
							<span className={styles.hint}>
								Expres aplica un 50% extra sobre base + peso.
							</span>
						</div>
						<div className={styles.field}>
							<span className={styles.label}>Adicionales:</span>
							<div className={styles.extras}>
								<label className={styles.extraItem}>
									<input type="checkbox" name="extras" value="recoleccion" />
									<span>Recoleccion (+ Q15.00)</span>
								</label>
								<label className={styles.extraItem}>
									<input type="checkbox" name="extras" value="seguro" />
									<span>Seguro (+ Q50.00)</span>
								</label>
							</div>
						</div>
						<button type="submit" className={styles.submit}>
							Calcular tarifa
						</button>
					</form>
					{cotizacion && (
						<div className={styles.ticket}>
							<h3 className={styles.ticketTitle}>Resumen</h3>
							<div className={styles.ticketRow}>
								<span>Base:</span>
								<span>Q {cotizacion.base}</span>
							</div>
							<div className={styles.ticketRow}>
								<span>Peso:</span>
								<span>Q {cotizacion.peso}</span>
							</div>
							<div className={styles.ticketRow}>
								<span>Extras:</span>
								<span>Q {cotizacion.extras}</span>
							</div>
							<div className={styles.ticketTotal}>
								<span>Total estimado:</span>
								<span>Q {cotizacion.total}</span>
							</div>
							<div className={styles.ticketTime}>
								<span>Tiempo estimado:</span>
								<strong>{cotizacion.tiempo}</strong>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
