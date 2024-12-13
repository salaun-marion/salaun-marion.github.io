import Navbar from './components/NavBar';
import Presentation from './components/Presentation';
import Accordion from './components/Accordion';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <section id="presentation">
          <Presentation />
        </section>
        <section id="project">
          <Accordion />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
