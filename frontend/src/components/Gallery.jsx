export default function Gallery() {
    return (
        <section id="galeria">
            <h2>Galería</h2>

            <div className="gallery">

                <div>
                    <img className="img-gallery1" src="/imagenes/aniversario1.jpg" alt="Ceremonias"/>
                    <p>Agosto 2025 Ceremonia Cívica</p>
                </div>

                <div>
                    <img className="img-gallery1" src="/imagenes/15septiembre1.jpg" alt="15 de septiembre"/>
                    <p>Septiembre 2025 Feria Mexicana</p>
                </div>

                <div>
                    <img className="img-gallery1" src="/imagenes/muertos1.jpg" alt="Día de muertos"/>
                    <p>Noviembre 2025 Día de Muertos</p>
                </div>

                <div>
                    <img className="img-gallery1" src="/imagenes/navidad2.jpg" alt="Navidad" title="Festival Navideño"/>
                    <p>Diciembre 2025 Festival Navideño</p>
                </div>
                 
                {/* Video 1 */}
                <div>
                    <video
                        className="video-gallery"
                        controls
                        width="400"
                    >
                        <source src="/videos/madres.mp4" type="video/mp4" />
                        Tu navegador no soporta videos.
                    </video>

                    <p>Mayo 2026 Día de las madres </p>
                </div>

                

            </div>
        </section>
    );
}
