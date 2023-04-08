import Header from "./components/Header";
import NavProvider from './context/NavContext';
import Home from "./sections/Home";
import AboutMe from './sections/AboutMe';
import Services from './sections/Services';
import Reviews from './sections/Reviews';
import ContactUs from './sections/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavProvider>
        <Header />
        <Home />
        <Services />
        <AboutMe />
        <Reviews />
        <ContactUs />
      </NavProvider>
    </div>
  );
}

export default App;
