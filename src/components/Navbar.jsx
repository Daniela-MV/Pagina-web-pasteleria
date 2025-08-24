import React from "react";


export const Navbar = () => {

	return (
		<div className="big-container">
			<div className="logo">
				<img src="src/assets/img/imagenes/Logo CM.jpeg" alt="Logo Casa Marquesa" width={"150px"} />
			</div>

			<div className="menu">
				<ul className="nav justify-content-end">
					<li className="nav-item">
						<a className="nav-link" href="#">Nosotros</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Menú</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Galeria de fotos</a>
					</li>
				</ul>
			</div>
		</div>


	);
};