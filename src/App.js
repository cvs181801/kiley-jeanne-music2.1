import Hero from './components/hero/Hero'
import Schedule from './components/schedule/Schedule';
import Listen from './components/listen/Listen'
import AboutMe from './components/aboutMe/AboutMe'
import Youtube from './components/youtube/Youtube'
import Instagram from './components/instagram/Instagram';
import Footer from './components/footer/Footer'
import ContactForm from './components/contactForm/ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero/>
        <Schedule/>
        <ContactForm/>
        <Listen/>
        <AboutMe/>
        <Youtube/>
        <Instagram/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;

//small change small change 
