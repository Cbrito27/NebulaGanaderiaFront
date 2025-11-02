import { useEffect, useState } from "react";
import {
	obtenerGanadosService,
	crearGanadoService,
	actualizarGanadoService,
} from "../../services/ganaderia.services";
import "./Ganado.css";

const Ganado = () => {
	const [ganados, setGanados] = useState([]);
	const [editId, setEditId] = useState(null);

	const [formData, setFormData] = useState({
		codigo_marcacion: "",
		nombre: "",
		raza: "",
		sexo: "",
		fecha_naci: "",
		estado_salud: "",
		estado_repro: "",
		peso_actual: "",
		origen: "",
	});

	// ✅ Cargar ganado al iniciar
	const cargarGanados = async () => {
		try {
			const data = await obtenerGanadosService();
			setGanados(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		cargarGanados();
	}, []);

	// ✅ Controlar cambios del formulario
	const handleChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	// ✅ Enviar (crear o actualizar)
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			if (editId) {
				await actualizarGanadoService(editId, formData);
			} else {
				await crearGanadoService(formData);
			}

			setEditId(null);
			limpiarFormulario();
			cargarGanados();
		} catch (err) {
			console.log(err);
		}
	};

	const limpiarFormulario = () => {
		setFormData({
			codigo_marcacion: "",
			nombre: "",
			raza: "",
			sexo: "",
			fecha_naci: "",
			estado_salud: "",
			estado_repro: "",
			peso_actual: "",
			origen: "",
		});
	};

	// ✅ Editar registro
	const handleEdit = (g) => {
		setEditId(g.id_ganado);
		setFormData({
			codigo_marcacion: g.codigo_marcacion,
			nombre: g.nombre,
			raza: g.raza,
			sexo: g.sexo,
			fecha_naci: g.fecha_naci?.split("T")[0],
			estado_salud: g.estado_salud,
			estado_repro: g.estado_repro,
			peso_actual: g.peso_actual,
			origen: g.origen,
		});
	};

	return (
		<div className="ganado">
			<h2>Gestión del Ganado</h2>

			{/* ✅ FORMULARIO */}
			<form className="ganado-form" onSubmit={handleSubmit}>
				<input type="text" name="codigo_marcacion" placeholder="Código" value={formData.codigo_marcacion} onChange={handleChange} required />
				<input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
				<input type="text" name="raza" placeholder="Raza" value={formData.raza} onChange={handleChange} />
				<select name="sexo" value={formData.sexo} onChange={handleChange}>
					<option value="">Sexo</option>
					<option value="Macho">Macho</option>
					<option value="Hembra">Hembra</option>
				</select>
				<input type="date" name="fecha_naci" value={formData.fecha_naci} onChange={handleChange} />
				<input type="text" name="estado_salud" placeholder="Estado salud" value={formData.estado_salud} onChange={handleChange} />
				<input type="text" name="estado_repro" placeholder="Estado reproductivo" value={formData.estado_repro} onChange={handleChange} />
				<input type="number" step="0.01" name="peso_actual" placeholder="Peso (kg)" value={formData.peso_actual} onChange={handleChange} />
				<input type="text" name="origen" placeholder="Origen" value={formData.origen} onChange={handleChange} />

				<button type="submit">
					{editId ? "Actualizar ganado" : "Registrar ganado"}
				</button>
			</form>

			{/* ✅ TABLA */}
			<table className="ganado-table">
				<thead>
					<tr>
						<th>ID</th>
						<th>Marcación</th>
						<th>Nombre</th>
						<th>Raza</th>
						<th>Sexo</th>
						<th>Peso</th>
						<th>Salud</th>
						<th>Acción</th>
					</tr>
				</thead>

				<tbody>
					{ganados.map((g) => (
						<tr key={g.id_ganado}>
							<td>{g.id_ganado}</td>
							<td>{g.codigo_marcacion}</td>
							<td>{g.nombre}</td>
							<td>{g.raza}</td>
							<td>{g.sexo}</td>
							<td>{g.peso_actual}</td>
							<td>{g.estado_salud}</td>
							<td>
								<button onClick={() => handleEdit(g)}>Editar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Ganado;
