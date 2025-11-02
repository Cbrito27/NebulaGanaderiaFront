import { useEffect, useState } from "react";
import * as ReproduccionService from "../../services//reproduccion.services";
import "./Reproduccion.css";

const Reproduccion = () => {
  const [reproducciones, setReproducciones] = useState([]);
  const [formData, setFormData] = useState({
    fecha_evento: "",
    observaciones: "",
    tipo_evento_idtipo_evento: "",
    cod_res_macho: "",
    cod_res_hembra: "",
  });

  useEffect(() => {
    loadReproducciones();
  }, []);

  const loadReproducciones = async () => {
    const data = await ReproduccionService.getAllReproduccion();
    setReproducciones(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ReproduccionService.createReproduccion(formData);
    setFormData({
      fecha_evento: "",
      observaciones: "",
      tipo_evento_idtipo_evento: "",
      cod_res_macho: "",
      cod_res_hembra: "",
    });
    loadReproducciones();
  };

  const handleDelete = async (id) => {
    await ReproduccionService.deleteReproduccion(id);
    loadReproducciones();
  };

  return (
    <main className="reproduccionMain">
      <section className="reproduccionForm">
        <h2>Registrar evento de reproducción</h2>
        <form onSubmit={handleSubmit}>
          <label>Fecha del evento</label>
          <input
            type="date"
            name="fecha_evento"
            value={formData.fecha_evento}
            onChange={handleChange}
            required
          />

          <label>Tipo de evento</label>
          <input
            type="number"
            name="tipo_evento_idtipo_evento"
            placeholder="ID tipo evento"
            value={formData.tipo_evento_idtipo_evento}
            onChange={handleChange}
            required
          />

          <label>Macho (ID)</label>
          <input
            type="number"
            name="cod_res_macho"
            placeholder="Código macho"
            value={formData.cod_res_macho}
            onChange={handleChange}
            required
          />

          <label>Hembra (ID)</label>
          <input
            type="number"
            name="cod_res_hembra"
            placeholder="Código hembra"
            value={formData.cod_res_hembra}
            onChange={handleChange}
            required
          />

          <label>Observaciones</label>
          <textarea
            name="observaciones"
            value={formData.observaciones}
            onChange={handleChange}
          />

          <button type="submit">Registrar</button>
        </form>
      </section>

      <section className="reproduccionList">
        <h2>Eventos de reproducción registrados</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha</th>
              <th>Tipo</th>
              <th>Macho</th>
              <th>Hembra</th>
              <th>Observaciones</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reproducciones.map((rep) => (
              <tr key={rep.cod_evento}>
                <td>{rep.cod_evento}</td>
                <td>{rep.fecha_evento?.slice(0, 10)}</td>
                <td>{rep.tipo_evento}</td>
                <td>{rep.nombre_macho}</td>
                <td>{rep.nombre_hembra}</td>
                <td>{rep.observaciones}</td>
                <td>
                  <button onClick={() => handleDelete(rep.cod_evento)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Reproduccion;
