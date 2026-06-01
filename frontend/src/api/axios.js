import axios from "axios";


// Conexión frontend (Netlify) → backend (Railway)
export default axios.create({
  baseURL: "Codigo_railway",
});
