import Image from "next/image";
export const AboutUs = () => {
	return (
		<section className="about_us__container" id="about_us">
			<div className="container">
				<div className="row align-items-center">
					<h2 className="mb-3 mt-5 text-center">Nuestra Chef</h2>
					<div className="col-12 col-md-6 col-lg-5 offset-lg-1 mt-3 mb-3">
						<p className="px-3 mb-5">
							Andrea Durán , es la chef y propietaria de Estación Gourmet creó
							la empresa en el 2006, amante de la buena cuchara, apasionada por
							su trabajo el cual disfruta de principio a fin.
						</p>
						<p className="px-3 mb-5">
							Todos nuestros productos son elaborados con los mejores
							ingredientes y dedicación para entregarle a nuestros clientes el
							mejor resultado en su mesa.
						</p>
						<p className="px-3 mb-5">
							Día a día estamos en la vanguardia para crear las mejores recetas.
						</p>
						<p className="px-3 mb-5">
							Les ofrecemos todos los servicios para su evento, nuestra
							experiencia en eventos corporativos, sociales, bodas, clases de
							cocina hacen que seamos su mejor opción.
						</p>
					</div>
					<picture className="col-12 col-md-6 about_us--picture d-flex justify-content-center my-3 px-0">
						<Image
							className="picture--item"
							width={500}
							height={500}
							src="/images/andrea.jpg"
							alt=""
						/>
					</picture>
				</div>
			</div>
		</section>
	);
};
