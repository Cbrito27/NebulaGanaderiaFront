import { useEffect, useState } from "react";
import * as ProduccionService from "../../services/produccion.services";
import "./Produccion.css";

const Produccion = () => {
  const [producciones, setProducciones] = useState([]);
  const [formData, setFormData] = useState({
    tipo_produc: "",
    fecha: "",
    cantidad: "",
    unidad: "",
    empleados_responsable: "",
    cod_res: "",
  });

  useEffect(() => {
    loadProducciones();
  }, []);

  const loadProducciones = async () => {
    const data = await ProduccionService.getProduccion();
    setProducciones(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await ProduccionService.postProduccion(formData);
    setFormData({
      tipo_produc: "",
      fecha: "",
      cantidad: "",
      unidad: "",
      empleados_responsable: "",
      cod_res: "",
    });
    loadProducciones();
  };

  const handleDelete = async (id) => {
    await ProduccionService.deleteProduccion(id);
    loadProducciones();
  };

  return (
    <main className="produccionMain">
      <section className="produccionForm">
        <h2>Registrar producción</h2>
        <form onSubmit={handleSubmit}>
          <label>Tipo de producción</label>
          <input
            type="text"
            name="tipo_produc"
            placeholder="Ej: Leche, Carne..."
            value={formData.tipo_produc}
            onChange={handleChange}
            required
          />

          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
          />

          <label>Cantidad</label>
          <input
            type="number"
            name="cantidad"
            placeholder="Ej: 120"
            value={formData.cantidad}
            onChange={handleChange}
            required
          />

          <label>Unidad</label>
          <input
            type="text"
            name="unidad"
            placeholder="Ej: Litros, Kg..."
            value={formData.unidad}
            onChange={handleChange}
            required
          />

          <label>Responsable (ID empleado)</label>
          <input
            type="text"
            name="empleados_responsable"
            placeholder="Código empleado"
            value={formData.empleados_responsable}
            onChange={handleChange}
          />

          <label>ID Ganado (opcional)</label>
          <input
            type="text"
            name="cod_res"
            placeholder="Código del animal"
            value={formData.cod_res}
            onChange={handleChange}
          />

          <button type="submit">Registrar</button>
        </form>
      </section>

      <section className="produccionList">
        <h2>Producciones registradas</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Cantidad</th>
              <th>Unidad</th>
              <th>Responsable</th>
              <th>Ganado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {producciones.length > 0 ? (
              producciones.map((p) => (
                <tr key={p.cod_produc}>
                  <td>{p.cod_produc}</td>
                  <td>{p.tipo_produc}</td>
                  <td>{p.fecha?.slice(0, 10)}</td>
                  <td>{p.cantidad}</td>
                  <td>{p.unidad}</td>
                  <td>{p.responsable}</td>
                  <td>{p.nombre_ganado || "N/A"}</td>
                  <td>
                    <button onClick={() => handleDelete(p.cod_produc)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="produccion-empty">
                  No hay registros de producción.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Produccion;
