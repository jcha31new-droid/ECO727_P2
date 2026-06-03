import axios from "axios";


// Conexión frontend (Netlify) → backend (Railway)
export default axios.create({
  baseURL: "https://eco727p2-production-80a5.up.railway.app/api/",
});
