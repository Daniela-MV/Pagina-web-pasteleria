import React from "react";


export const Navbar = () => {

	return (
		<div className="container">
			<a className="navbar-brand" href="#">
				<img src="src/assets/img/imagenes/Logo CM.jpeg" alt="Logo Casa Marquesa" width={"150px"} />
			</a>

			<ul className="nav justify-content-end">
				<li className="nav-item">
					<a className="nav-link" href="#">Nosotros</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Menú</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#">Cotizaciones</a>
				</li>
			</ul>
		</div>


	);
};