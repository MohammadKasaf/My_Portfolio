
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';
import Resume from './components/Resume/Resume';
import Skill from './components/Skill/Skill';
import Training from './components/Training/Training';


function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Education/>
      <Skill/>
      <Resume/>
      <Training/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;