import Image from "next/image";

const services = [
	{
		title: "Menú Semanal",
		description: [
			"Comida casera para toda la familia, sabores y productos naturales, entregados en la puerta de su casa.",
		],
		image: "/images/services/menu_semanal.jpg",
	},
	{
		title: "Eventos Sociales y Corporativos",
		description: [
			"Bautizos, cumpleaños, aniversarios, bodas, primera comunión, compromisos, parrilladas y eventos para empresas.",
		],
		image: "/images/services/social_event.jpg",
	},
	{
		title: "Clases de Cocina",
		description: [
			"Clases de cocina basados en la necesidad y gusto de cada familia.",
		],
		image: "/images/services/classes.jpg",
	},
	{
		title: "Cookie boxes",
		description: [
			"Mensajes dulces y especiales.",
			"Crea tu mensaje secreto para una persona especial.",
		],
		image: "/images/services/cookie_boxes.jpg",
	},
	{
		title: "Cajas corporativass",
		description: [
			"Cajas para reuniones virtuales o presenciales.",
			"Desayunos, refrigerios, almuerzos o cenas.",
		],
		image: "/images/services/corporation_boxes.jpg",
	},
	{
		title: "Pastelería",
		description: ["Pastelería artesanal con recetas originales."],
		image: "/images/services/bakery.jpg",
	},
];

export const OurServices = () => {
	return (
		<section className="our_services" id="our_services">
			<h2 className="text-center mt-5 mb-5">Nuestros servicios</h2>
			<div className="container mb-5">
				<div className="card-group mb-5">
					<div className="row d-flex justify-content-center">
						<div className="card col-12 mb-3 mt-3">
							{services.map((service, index) => (
								<div className="row g-0" key={index}>
									<div className="col-3 col-md-4">
										<Image
											width={100}
											height={100}
											src={service.image}
											className="card-img-top"
											alt={service.title}
										/>
									</div>
									<div className="col-9 col-md-8">
										<div className="card-body pt-1">
											<h5 className="card-title">{service.title}</h5>
											{service.description.map((item, index) => (
												<p className="card-text" key={index}>
													{item}
												</p>
											))}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
