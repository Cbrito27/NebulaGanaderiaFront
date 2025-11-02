import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL + "api/reproduccion";

/* Obtener todas las reproducciones */
export const getAllReproduccion = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reproducciones:", error);
    throw error;
  }
};

/* Obtener una reproducción por ID */
export const getReproduccionById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener reproducción por ID:", error);
    throw error;
  }
};

/* Crear una nueva reproducción */
export const createReproduccion = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Error al crear reproducción:", error);
    throw error;
  }
};

/* Actualizar reproducción */
export const updateReproduccion = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar reproducción:", error);
    throw error;
  }
};

/* Eliminar reproducción */
export const deleteReproduccion = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al eliminar reproducción:", error);
    throw error;
  }
};
