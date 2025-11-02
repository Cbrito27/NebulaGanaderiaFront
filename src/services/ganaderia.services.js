import axios from "axios";

const API = import.meta.env.VITE_REACT_APP_API_URL + "api/";

export const obtenerGanadosService = async () => {
  try {
    const res = await axios.get(`${API}ganados`);
    return res.data;
  } catch (err) {
    console.error("Error al obtener ganados:", err);
    throw err;
  }
};

export const obtenerGanadoPorIdService = async (id) => {
  try {
    const res = await axios.get(`${API}ganado/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error al obtener ganado:", err);
    throw err;
  }
};

export const crearGanadoService = async (data) => {
  try {
    const res = await axios.post(`${API}ganado`, data);
    return res.data;
  } catch (err) {
    console.error("Error al crear ganado:", err);
    throw err;
  }
};

export const actualizarGanadoService = async (id, data) => {
  try {
    const res = await axios.put(`${API}ganado/${id}`, data);
    return res.data;
  } catch (err) {
    console.error("Error al actualizar ganado:", err);
    throw err;
  }
};
