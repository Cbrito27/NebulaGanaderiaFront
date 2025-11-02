import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

// ✅ Obtener todas las producciones
export const getProduccion = async () => {
  try {
    const response = await axios.get(`${API_URL}api/produccion`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener producciones:", error);
    throw error;
  }
};

// ✅ Crear nueva producción
export const postProduccion = async (data) => {
  try {
    const response = await axios.post(`${API_URL}api/produccion`, data);
    return response.data;
  } catch (error) {
    console.error("Error al crear producción:", error);
    throw error;
  }
};

// ✅ Editar producción
export const putProduccion = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}api/produccion/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al editar producción:", error);
    throw error;
  }
};
