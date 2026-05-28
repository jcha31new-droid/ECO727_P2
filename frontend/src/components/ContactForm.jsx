import { useState } from "react";


export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const mailtoLink = `mailto:jcha31@hotmail.com
    ?subject=${encodeURIComponent("Asunto")}
    &body=${encodeURIComponent(
      `Hola, mi nombre es ${nombre}

Correo: ${correo}

Mensaje:
${mensaje}`
    )}`;

  return (
    <section id="contacto" className="contact-section">
      <h2>Formulario de Contacto</h2>

      <form className="contact-form">
        <label>Nombre:</label>
        <input
          type="text"
          placeholder="Tu nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Correo:</label>
        <input
          type="email"
          placeholder="Tu correo"
          required
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />

        <label>Mensaje:</label>
        <textarea
          placeholder="Escribe tu mensaje"
          rows="5"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        ></textarea>

        <a href={mailtoLink}>
          <button type="button">Enviar</button>
        </a>
      </form>
    </section>
  );
}
