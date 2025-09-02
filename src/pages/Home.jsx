

export const Home = () => {


	return (
		<div className="containerImages">

			{/* Pastelería */}
				<div id="bakeryCarousel" className="carousel slide">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#bakeryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#bakeryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#bakeryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="src/assets/img/imagenes/pastel_pag_principal.jpeg" className="d-block w-100" alt="pastel de cumpleaños" />
							<div className="carousel-caption d-none d-md-block">
								<h5>PASTELERÍA</h5>
								<p>En Casa Marquesa transformamos tus ideas en pasteles personalizados que deslumbran por fuera
									y conquistan por dentro.
								</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="src/assets/img/imagenes/chocolateFresas.jpeg" className="d-block w-100" alt="Pastel de chocolate con frutos rojos" />
							<div className="carousel-caption d-none d-md-block">
								<h5>PASTELERÍA</h5>
								<p>Cada pastel está hecho con dedicación, pensado especialmente para tí.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="src/assets/img/imagenes/tiramisu.jpeg" className="d-block w-100" alt="tiramisú" />
							<div className="carousel-caption d-none d-md-block">
								<h5>PASTELERÍA</h5>
								<p>Desde la elección del sabor hasta los detalles decorativos, cada pastel está pensado para emocionar, sorprender y dejar huella 
									en quienes lo disfrutan.
								</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev carousel-dark" type="button" data-bs-target="#bakeryCarousel" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true" ></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next carousel-dark" type="button" data-bs-target="#bakeryCarousel" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>


			{/* Cafeteria */}

				<div id="cafeCarousel" className="carousel slide">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#cafeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#cafeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#cafeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src="src/assets/img/imagenes/cafe_croasant.jpg" className="d-block w-100" alt="Café y croasant" />
							<div className="carousel-caption d-none d-md-block">
								<h5>CAFETERÍA</h5>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="src/assets/img/imagenes/mostradorCafe.jpg" className="d-block w-100" alt="Cafetería Casa Marquesa" />
							<div className="carousel-caption d-none d-md-block">
								<h5>CAFETERÍA</h5>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div className="carousel-item">
							<img src="src/assets/img/imagenes/cafe_baguete.jpg" className="d-block w-100" alt="Café americano y Baguette" />
							<div className="carousel-caption d-none d-md-block">
								<h5>CAFETERÍA</h5>
								<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button className="carousel-control-prev carousel-dark" type="button" data-bs-target="#cafeCarousel" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next carousel-dark" type="button" data-bs-target="#cafeCarousel" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
	);
}; 