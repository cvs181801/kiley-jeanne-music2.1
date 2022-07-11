import NavBar from './components/navBar/NavBar'
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
        <NavBar/>
        <Hero/>
        <Schedule/>
        <ContactForm/>
        <AboutMe/>
        <Listen/>
        <Youtube/>
        <Instagram/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;


//remove the contact form close
//remove console logs
//set up responsive layout for larger browsers
//remove the unused google fonts
//how to request images from contently at the needed size?
//figure out a way to create a loading effect for each component
//how to get the contact form to appear at the place the user is at on the page - or navigate them to the top of the page