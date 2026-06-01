import axios from "../api/axios";
import { useEffect, useState } from "react";

function CancionList() {
    const [canciones, setCanciones] = useState([]);
    const [formData, setFormData] = useState({
        titulo: "",
        grupo_interprete: "",
        genero: "",
        nacionalidad: "",
        fecha_lanzamiento: "",
        idioma: "",
        duracion_minutos: "",
        video: "",
        comentarios: "",
    });

    const [editandoId, setEditandoId] = useState(null);

    // Obtener canciones
    const getCanciones = async () => {
        const res = await axios.get("canciones/");
        setCanciones(res.data);
    };

    // Crear nueva canción
    const createCancion = async () => {
        await axios.post("canciones/", formData);
        resetForm();
        getCanciones();
    };

    // Actualizar canción existente
    const updateCancion = async (id) => {
        await axios.put(`canciones/${id}/`, formData);
        resetForm();
        setEditandoId(null);
        getCanciones();
    };

    // Eliminar canción
    const deleteCancion = async (id) => {
        await axios.delete(`canciones/${id}/`);
        getCanciones();
    };

    // Reiniciar formulario
    const resetForm = () => {
        setFormData({
            titulo: "",
            grupo_interprete: "",
            genero: "",
            nacionalidad: "",
            fecha_lanzamiento: "",
            idioma: "",
            duracion_minutos: "",
            video: "",
            comentarios: "",
        });
    };

    // Cargar datos en el formulario para editar
    const handleEdit = (cancion) => {
        setEditandoId(cancion.id);
        setFormData({
            titulo: cancion.titulo,
            grupo_interprete: cancion.grupo_interprete,
            genero: cancion.genero,
            nacionalidad: cancion.nacionalidad,
            fecha_lanzamiento: cancion.fecha_lanzamiento,
            idioma: cancion.idioma,
            duracion_minutos: cancion.duracion_minutos,
            video: cancion.video,
            comentarios: cancion.comentarios,
        });
    };

    useEffect(() => {
        getCanciones();
    }, []);

    return (
        <section id="canciones">
            <h2>Canciones favoritas de la Estudiantina UPIICSA</h2>

            {/* FORMULARIO */}
            <form
                className="cancion-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (editandoId) {
                        updateCancion(editandoId);
                    } else {
                        createCancion();
                    }
                }}
            >
                <input placeholder="Título" value={formData.titulo} onChange={(e) => setFormData({ ...formData, titulo: e.target.value })} />
                <input placeholder="Grupo/Intérprete" value={formData.grupo_interprete} onChange={(e) => setFormData({ ...formData, grupo_interprete: e.target.value })} />
                <input placeholder="Género" value={formData.genero} onChange={(e) => setFormData({ ...formData, genero: e.target.value })} />
                <input placeholder="Nacionalidad" value={formData.nacionalidad} onChange={(e) => setFormData({ ...formData, nacionalidad: e.target.value })} />
                <input type="date" value={formData.fecha_lanzamiento} onChange={(e) => setFormData({ ...formData, fecha_lanzamiento: e.target.value })} />
                <input placeholder="Idioma" value={formData.idioma} onChange={(e) => setFormData({ ...formData, idioma: e.target.value })} />
                <input placeholder="Duración (min)" value={formData.duracion_minutos} onChange={(e) => setFormData({ ...formData, duracion_minutos: e.target.value })} />
                <input placeholder="URL del video" value={formData.video} onChange={(e) => setFormData({ ...formData, video: e.target.value })} />
                <textarea placeholder="Comentarios" value={formData.comentarios} onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })} />

                <button type="submit">
                    {editandoId ? "Guardar cambios" : "Agregar canción"}
                </button>

                {editandoId && (
                    <button
                        type="button"
                        className="cancelar-btn"
                        onClick={() => {
                            resetForm();
                            setEditandoId(null);
                        }}
                    >
                        Cancelar edición
                    </button>
                )}
            </form>

            <div class="table-responsive">

                {/* TABLA */}
                <table className="cancion-tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Grupo/Intérprete</th>
                            <th>Género</th>
                            <th>Nacionalidad</th>
                            <th>Fecha lanzamiento</th>
                            <th>Idioma</th>
                            <th>Duración</th>
                            <th>Video</th>
                            <th>Comentarios</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {canciones.map((c) => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.titulo}</td>
                                <td>{c.grupo_interprete}</td>
                                <td>{c.genero}</td>
                                <td>{c.nacionalidad}</td>
                                <td>{c.fecha_lanzamiento}</td>
                                <td>{c.idioma}</td>
                                <td>{c.duracion_minutos}</td>
                                <td>
                                    {c.video ? (
                                        <a href={c.video} target="_blank" rel="noopener noreferrer">
                                            Ver video
                                        </a>
                                    ) : (
                                        "-"
                                    )}
                                </td>
                                <td>{c.comentarios}</td>
                                <td>
                                    <button onClick={() => handleEdit(c)}>✏️ Editar</button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm(`¿Estás seguro de que deseas eliminar "${c.titulo}"?`)) {
                                                deleteCancion(c.id);
                                            }
                                        }}
                                    >
                                        🗑️ Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default CancionList;
