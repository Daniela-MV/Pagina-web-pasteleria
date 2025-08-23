

export const Home = () => {


	return (
		<div className="containerImages">

			{/* Pastelería */}

			<div className="carouselBakery">
				<div className="bakery">
					<div className="bakeryImage">
						<img src="src/assets/img/imagenes/pastel_pag_principal.jpeg" className="d-block w-100" alt="pastel página principal" />
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
					<div className="bakeryImage">
						<img src="src/assets/img/imagenes/chocolateFresas.jpeg" className="d-block w-100" alt="Café y croasant" />
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
					<div className="bakeryImage">
						<img src="..." className="d-block w-100" alt="..." />
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>

			{/* Cafeteria */}

			{/* <div className="carouselCafe">
				<div className="cafe">
					<div className="firstImageCafe">
						<img src="src/assets/img/imagenes/cafe_croasant.jpg" className="d-block w-100" alt="croasant y café" />
					</div>
					<div className="secondImageCafe">
						<img src="src/assets/img/imagenes/cafe_baguete.jpg" className="d-block w-100" alt="..." />
					</div>
					<div className="thirdImageCafe">
						<img src="..." className="d-block w-100" alt="..." />
					</div>
				</div>
				<button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div> */}


		</div>
	);
}; 