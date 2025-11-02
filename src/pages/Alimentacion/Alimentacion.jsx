import { useEffect, useState } from "react";
import {
  getAlimentaciones,
  createAlimentacion,
  updateAlimentacion,
} from "../../services/alimentacion.services.js";
import "./Alimentacion.css";

export const Alimentacion = () => {
  const [alimentaciones, setAlimentaciones] = useState([]);
  const [formData, setFormData] = useState({
    tipo_alimento: "",
    cantidad: "",
    fecha_suministro: "",
    observaciones: "",
    ganado_cod_ganado: "",
  });
  const [editando, setEditando] = useState(null);

  // 🔹 Cargar alimentaciones
  const fetchAlimentaciones = async () => {
    try {
      const data = await getAlimentaciones();
      setAlimentaciones(data);
    } catch (error) {
      console.error("Error al listar alimentaciones:", error);
    }
  };

  useEffect(() => {
    fetchAlimentaciones();
  }, []);

  // 🔹 Manejo de inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🔹 Crear / Editar
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editando) {
        await updateAlimentacion(editando, formData);
      } else {
        await createAlimentacion(formData);
      }

      setFormData({
        tipo_alimento: "",
        cantidad: "",
        fecha_suministro: "",
        observaciones: "",
        ganado_cod_ganado: "",
      });
      setEditando(null);
      fetchAlimentaciones();
    } catch (error) {
      console.error("Error al guardar:", error);
    }
  };

  // 🔹 Editar registro existente
  const handleEdit = (item) => {
    setFormData({
      tipo_alimento: item.tipo_alimento,
      cantidad: item.cantidad,
      fecha_suministro: item.fecha_suministro?.split("T")[0],
      observaciones: item.observaciones || "",
      ganado_cod_ganado: item.ganado_cod_ganado,
    });
    setEditando(item.cod_alimen);
  };

  return (
    <section className="alimentacion">
      <h2>Gestión de Alimentación</h2>

      {/* FORMULARIO */}
      <form className="alimentacion-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="tipo_alimento"
          placeholder="Tipo de alimento"
          value={formData.tipo_alimento}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="cantidad"
          placeholder="Cantidad (kg)"
          value={formData.cantidad}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="fecha_suministro"
          value={formData.fecha_suministro}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="ganado_cod_ganado"
          placeholder="Código del ganado"
          value={formData.ganado_cod_ganado}
          onChange={handleChange}
          required
        />
        <textarea
          name="observaciones"
          placeholder="Observaciones"
          rows={2}
          value={formData.observaciones}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          {editando ? "Actualizar registro" : "Registrar alimentación"}
        </button>
      </form>

      {/* TABLA */}
      {alimentaciones.length === 0 ? (
        <p className="alimentacion-empty">No hay registros de alimentación</p>
      ) : (
        <table className="alimentacion-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo alimento</th>
              <th>Descripcio</th>
              <th>proveedor</th>
            </tr>
          </thead>
          <tbody>
            {alimentaciones.map((item) => (
              <tr key={item.cod_alimen}>
                <td data-label="ID">{item.cod_alimen}</td>
                <td data-label="Tipo">{item.tipo_alimen}</td>
                <td data-label="Descripcio">{item.descripcion}</td>
                <td data-label="proveedor">{item.proveedor}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};
export default Alimentacion;
