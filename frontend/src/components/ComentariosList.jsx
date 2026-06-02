import axios from "../api/axios";
import { useEffect, useState } from "react";

function ComentariosList() {
    const [comentarios, setComentarios] = useState([]);
    const [formData, setFormData] = useState({
        nombre: "",
        genero: "",
        fecha: "",
        grado: "",
        grupo: "",
        turno: "",
        materia: "",
        docente: "",
        comentario: "",
    });

    const [editandoId, setEditandoId] = useState(null);

    // Obtener comentario
    const getComentarios = async () => {
        const res = await axios.get("comentarios/");
        setComentarios(res.data);
    };

    // Crear comentario
    const createComentarios = async () => {
        await axios.post("comentarios/", formData);
        resetForm();
        getComentarios();
    };

    // Actualizar comentario
    const updateComentarios = async (id) => {
        await axios.put(`comentarios/${id}/`, formData);
        resetForm();
        setEditandoId(null);
        getComentarios();
    };

    // Eliminar comentario
    const deleteComentarios = async (id) => {
        await axios.delete(`comentarios/${id}/`);
        getComentarios();
    };

    // Reiniciar formulario
    const resetForm = () => {
        setFormData({
            nombre: "",
            genero: "",
            fecha: "",
            grado: "",
            grupo: "",
            turno: "",
            materia: "",
            docente: "",
            comentario: "",
        });
    };

    // Cargar datos en el formulario para editar
    const handleEdit = (comentario) => {
        setEditandoId(comentario.id);
        setFormData({
            nombre: comentario.nombre,
            genero: comentario.genero,
            fecha: comentario.fecha,
            grado: comentario.grado,
            grupo: comentario.grupo,
            turno: comentario.turno,
            materia: comentario.materia,
            docente: comentario.docente,
            comentario: comentario.comentario,
        });
    };

    useEffect(() => {
        getComentarios();
    }, []);

    return (
        <section id="comentarios">
            <h2>Comentarios de padres de familia</h2>

            {/* FORMULARIO */}
            <form
                className="comentario-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (editandoId) {
                        updateComentario(editandoId);
                    } else {
                        createComentario();
                    }
                }}
            >
                <input placeholder="Nombre" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} />
                <input placeholder="Genero" value={formData.genero} onChange={(e) => setFormData({ ...formData, genero: e.target.value })} />
                <input type="date" value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })} />
                <input placeholder="Grado" value={formData.grado} onChange={(e) => setFormData({ ...formData, grado: e.target.value })} />
                <input placeholder="Grupo" value={formData.grupo} onChange={(e) => setFormData({ ...formData, grupo: e.target.value })} />
                <input placeholder="Turno" value={formData.turno} onChange={(e) => setFormData({ ...formData, turno: e.target.value })} />
                <input placeholder="Materia" value={formData.materia} onChange={(e) => setFormData({ ...formData, materia: e.target.value })} />
                <input placeholder="Docente" value={formData.docente} onChange={(e) => setFormData({ ...formData, docente: e.target.value })} />
                <textarea placeholder="Comentario" value={formData.comentario} onChange={(e) => setFormData({ ...formData, comentario: e.target.value })} />

                <button type="submit">
                    {editandoId ? "Guardar cambios" : "Agregar comentario"}
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
                <table className="comentario-tabla">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Genero</th>
                            <th>Fecha</th>
                            <th>Grado</th>
                            <th>Grupo</th>
                            <th>Turno</th>
                            <th>Materia</th>
                            <th>Docente</th>
                            <th>Comentario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comentarios.map((c) => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.nombre}</td>
                                <td>{c.genero}</td>
                                <td>{c.fecha}</td>
                                <td>{c.grado}</td>
                                <td>{c.grupo}</td>
                                <td>{c.turno}</td>
                                <td>{c.materia}</td>
                                <td>{c.docente}</td>
                                <td>{c.comentario}</td>
                                <td>
                                    <button onClick={() => handleEdit(c)}>✏️ Editar</button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm(`¿Estás seguro de que deseas eliminar "${c.comentario}"?`)) {
                                                deleteComentario(c.id);
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

export default ComentariosList;
