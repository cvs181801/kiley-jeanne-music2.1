import NavBar from './components/navBar/NavBar'
import Hero from './components/hero/Hero'
import Schedule from './components/schedule/Schedule';
import Listen from './components/listen/Listen'
import AboutMe from './components/aboutMe/AboutMe'
import Youtube from './components/youtube/Youtube'
import Instagram from './components/instagram/Instagram';
import Footer from './components/footer/Footer'
import ContactForm from './components/contactForm/ContactForm';
import ContactButton from './components/contactButton/ContactButton';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Hero/>
        <ContactButton/>
        <ContactForm/>
        <div
          className="flowContainer"
        >
          <Schedule/>
          <AboutMe/>
        </div>
        <Listen/>
        <Youtube/>
        <Instagram/>
        <Footer/>
    </div>
  );
}

export default App;


//make modal bogger on larger screen sizes?
//remove the unneeded function and piece of state for designating whether user clicked on contact form from sched vs. from navbar
//add global variables for all colors and fonts in css. how to do in Sass?
//why isn't netlify forms emailing her the messages?
//how to use material ui