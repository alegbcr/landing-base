import Image from "next/image";
export const Form = () => {
	return (
		<section className="talk_to_us" id="talk_to_us">
			<div className="container">
				<div className="row">
					<h2 className="mb-3 mt-5 text-center">Cotiza con nosotros</h2>
					<picture className="mt-5 col-12 col-md-6 col-md-6 col-lg-5 offset-lg-1 px-5 d-flex justify-content-center">
						<Image
							width={100}
							height={100}
							className="picture--item "
							src="./images/talk_to_us/contact.svg"
							alt=""
						/>
					</picture>
					<div className="mt-5 mb-5 px-5 col-12 col-md-6 col-lg-5 ">
						<form action="phpmailer.php" method="POST" className="mt-5 contact">
							<input type="hidden" name="token" id="token" />
							<div className="mb-3 mt-3">
								<label htmlFor="name" className="form-label">
									Nombre Completo
								</label>
								<input
									type="text"
									name="name"
									className="form-control"
									id="name"
									aria-describedby="emailHelp"
									placeholder="Ingresa tu nombre"
								/>
							</div>
							<div className="mb-3 mt-3">
								<label htmlFor="phone" className="form-label">
									Teléfono
								</label>
								<input
									type="number"
									name="phone"
									className="form-control"
									id="phone"
									aria-describedby="emailHelp"
									placeholder="Ingresa tu número de teléfono"
								/>
							</div>
							<div className="mb-3 mt-3">
								<label htmlFor="email" className="form-label">
									Correo
								</label>
								<input
									type="email"
									name="email"
									className="form-control"
									id="email"
									aria-describedby="emailHelp"
									placeholder="Ingresa tu correo de contacto"
								/>
							</div>
							<div className="mb-3 mt-3">
								<label htmlFor="numberPeople" className="form-label">
									Cantidad de personas
								</label>
								<input
									type="number"
									name="numberPeople"
									className="form-control"
									id="numberPeople"
									aria-describedby="emailHelp"
									placeholder="Ingresa el número de personas"
								/>
							</div>
							<div className="mb-3 mt-3">
								<label htmlFor="place" className="form-label">
									Lugar
								</label>
								<input
									type="text"
									name="place"
									className="form-control"
									id="place"
									aria-describedby="emailHelp"
									placeholder="Ingresa el lugar del evento"
								/>
							</div>
							<div className="mb-3 mt-3">
								<label htmlFor="date" className="form-label">
									Fecha y Hora
								</label>
								<input
									type="date"
									name="date"
									className="form-control"
									id="date"
								/>
							</div>
							<div className="mb-3 mt-3">
								<label htmlFor="message" className="form-label">
									Requerimiento especial
								</label>
								<textarea
									name="message"
									className="form-control"
									rows="4"
									placeholder="Qué deberíamos saber"
								></textarea>
							</div>
							<div></div>
							<div className="d-grid gap-2">
								<button
									id="submit-button"
									type="submit"
									className="btn btn-success mt-4"
									disabled
								>
									Envia la cotización
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
