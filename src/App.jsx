import './i18n/index.js';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Menu from './sections/Menu';
import Location from './sections/Location';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
