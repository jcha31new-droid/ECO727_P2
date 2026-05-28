export default function Testimonials() {
  return (
    <section id="testimonios">
      <h2>Casos de Éxito</h2>
      <br />
      <p><strong>Participación en eventos y torneos</strong></p>
        <table id="table1" border="1">
          <tr>
            <td>Participación en la "Aventura Científica y Tecnológica"</td>
            <td><img className="img-gallery2" src="/imagenes/aventura.jpg" alt="Aventura Científica"/></td>
          </tr>
          <tr>
            <td>Torneo "TOCHITO BANDERA" etapa estatal</td>
            <td><img className="img-gallery2" src="/imagenes/tochito.jpg" alt="Tochito Bandera"/></td>
          </tr>
          <tr>
            <td>Centenario de la Educación Secundaria<br></br>Feria Científica</td>
            <td><img className="img-gallery2" src="/imagenes/cientifica.jpg" alt="Feria Científica"/></td>
          </tr>
          <tr>
            <td>Centenario de la Educación Secundaria<br></br>Feria Tecnológica</td>
            <td><img className="img-gallery2" src="/imagenes/tecnologica.jpg" alt="Feria Tecnológica"/></td>
          </tr>
        </table>
    </section>
  );
}
