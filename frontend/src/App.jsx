import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <section id="nosotros">
        <h2>Sobre Nosotros</h2>
        <p><strong>Ubicación</strong></p><br></br>
        <p>La Escuela Secundaria Técnica No. 83 "Ignacio Zaragoza Seguín" es un plantel público ubicado en 
        Calle 6 y Av. Puebla s/n, en la Col. Agrícola Pantitlán, Alcaldía Iztacalco, C.P. 08100, en la CDMX.
        El nombre del plantel rinde homenaje a Ignacio Zaragoza Seguín (1829-1862), el ilustre general y héroe 
        militar mexicano que comandó el Ejército de Oriente y logró la histórica e imborrable victoria sobre las tropas 
        francesas en la Batalla de Puebla el 5 de mayo de 1862.</p><br></br>
        
        <p><strong>Historia y Concepto de las Escuelas Técnicas</strong></p><br></br>
        <p>La modalidad: Como parte de las escuelas secundarias técnicas en México, esta institución combina la educación básica 
        general con la enseñanza de distintas tecnologías, impartiendo en nuestro plantel las siguientes: Confección del Vestido e Industria Textil,
        Diseño de Circuitos Eléctricos, Ofimática y Contabilidad.
        Orígenes: El sistema de educación tecnológica en el país nació como un apéndice de las antiguas escuelas de artes y oficios, 
        buscando estructurar un modelo que respondiera a las demandas concretas y el avance tecnológico de la sociedad.
        El contexto del nivel: La educación secundaria comenzó a organizarse formalmente en el país en 1925, y se convirtió en un 
        nivel obligatorio a nivel nacional en 1993.</p><br></br>

        <p><strong>Organigrama</strong></p>
        <img className='Logo' src="/imagenes/organigrama.jpg" alt="TEXTO" />
        
        <p><strong>Himno a Escuelas Secundarias Técnicas</strong></p><br></br>
        <iframe width="560" height="320" src="https://www.youtube.com/embed/WhVdVIza5D8?si=YO_zHNiF7rKrgZls" ></iframe>   
      </section>

      <section id="mision-vision">
        <h2>Misión y Visión </h2>
        <p><strong>Misión</strong> <br /> Garantizar una educación de excelencia e integral para los adolescentes, 
        fortaleciendo sus capacidades humanísticas, científicas y tecnológicas. Busca acercar a los estudiantes al 
        mundo laboral mediante el manejo de recursos y conocimientos técnicos, promoviendo el pensamiento crítico, 
        los valores y una conciencia social activa.</p>
        <p><strong>Visión</strong> <br /> Ser la modalidad educativa de nivel secundaria líder y de referencia. 
        Aspiran a formar una comunidad de agentes de cambio capaces de aplicar competencias tecnológicas y académicas 
        para el desarrollo del país, en un marco de inclusión, respeto y mejora continua. </p>
      </section>

      <Services />
      <Gallery />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
