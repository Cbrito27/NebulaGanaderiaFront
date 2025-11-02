import { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const LandingDashboard = () => {
	const [allIdeas, setAllIdeas] = useState([]);
	const [userIdeas, setUserIdeas] = useState([]);
	const [allRetos, setAllRetos] = useState([]);
	const [userRetos, setUserRetos] = useState([]);
	const [newChallenge, setNewChallenge] = useState([]);
	const containerRef = useRef(null);
	const navigate = useNavigate();

	// Simulación de usuario (en lugar de dataDecrypt)
	const user = { id: 1, nombre: "Usuario Demo" };

	useEffect(() => {
		// Simulación de datos (reemplaza con tus servicios o API reales)
		const dataTotalIdeas = async () => {
			setAllIdeas([{ id: 1 }, { id: 2 }]);
		};
		const dataIdeasUsuarios = async () => {
			setUserIdeas([{ id: 1 }]);
		};
		const dataTotalRetos = async () => {
			setAllRetos([{ id: 1 }, { id: 2 }, { id: 3 }]);
		};
		const datRetossUsuarios = async () => {
			setUserRetos([{ id: 1 }]);
		};
		const validateChallange = async () => {
			setNewChallenge([
				{
					_id: 1,
					tipo_innovacion: { nombre: "Innovación Abierta" },
					titulo: "Reto de Ejemplo",
					fechaFinal: "2025-12-01",
				},
			]);
		};

		dataTotalIdeas();
		dataIdeasUsuarios();
		dataTotalRetos();
		datRetossUsuarios();
		validateChallange();

		const container = containerRef.current;
		const handleWheel = (event) => {
			if (container) container.scrollLeft += event.deltaY;
			event.preventDefault();
		};

		if (container) {
			container.addEventListener("wheel", handleWheel);
			return () => container.removeEventListener("wheel", handleWheel);
		}
	}, []);

	const irAlReto = (id) => {
		navigate(`/reto/${id}`);
	};

	return (
		<div className='landingdashboard'>
			<section>
				<article>
					<h1>
						¡Hagamos de la <br />
						<span>innovación</span> la <br /> meta que nos une!
					</h1>
					<p>
						Este es un espacio donde puedes explorar y compartir ideas y retos
						de innovación.
					</p>
				</article>

				<article>
					<div>
						<p>{allIdeas.length}</p>
						<span>Ideas en total </span>
					</div>
					<div>
						<p>{allRetos.length}</p>
						<span>Retos en total</span>
					</div>
					<div>
						<p>{userIdeas.length}</p>
						<span>Ideas propuestas</span>
					</div>
					<div>
						<p>{userRetos.length}</p>
						<span>Retos subidos</span>
					</div>
				</article>

				<article>
					<div>
						<h4>Las ideas son las que mueven el mundo</h4>
						<p>
							Esa idea que ronda por tu cabeza, ese chispazo que surgió y piensas
							“¿qué pasaría si...?”
						</p>
						<NavLink to='../crear_idea'>Agregar idea</NavLink>
					</div>
					<div>
						<h4>¿Tienes un problema que no sabes cómo resolver?</h4>
						<p>
							Compártenos ese reto para que entre todos encontremos la mejor
							solución.
						</p>
						<NavLink to='../mi_reto'>Agregar reto</NavLink>
					</div>
				</article>

				<article>
					<h3>Retos en lanzamiento</h3>
					<div className='carrusel' ref={containerRef}>
						{newChallenge.map((reto, index) => (
							<div key={index} className='campainChallenge'>
								<figure>
									<h4>{reto?.tipo_innovacion?.nombre}</h4>
									<p>
										<span></span>En{" "}
										{Math.ceil(
											(new Date(reto.fechaFinal) - new Date()) /
												(1000 * 60 * 60 * 24)
										)}{" "}
										días termina
									</p>
								</figure>
								<div className='campainChallengeContent'>
									<p>{reto.titulo}</p>
									<div>
										<button onClick={() => irAlReto(reto._id)}>Ver reto 👀</button>
										<button>
											<NavLink to='../mis_retos_lanzados'>
												Explorar retos 🔍
											</NavLink>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</article>
			</section>
		</div>
	);
};

export { LandingDashboard };
