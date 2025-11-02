import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL + "api/alimentacion";

export const getAlimentaciones = async () => {
  try {
    const res = await axios.get(API_URL);
    return res.data;
  } catch (error) {
    console.error("❌ Error al obtener alimentaciones:", error);
    throw error;
  }
};

export const getAlimentacionById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("❌ Error al obtener la alimentación:", error);
    throw error;
  }
};

export const createAlimentacion = async (data) => {
  try {
    const res = await axios.post(API_URL, data);
    return res.data;
  } catch (error) {
    console.error("❌ Error al crear la alimentación:", error);
    throw error;
  }
};

export const updateAlimentacion = async (id, data) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, data);
    return res.data;
  } catch (error) {
    console.error("❌ Error al actualizar la alimentación:", error);
    throw error;
  }
};
