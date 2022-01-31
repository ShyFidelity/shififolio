
import './App.css';
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Resume from './components/Resume';
import Work from './components/Work';
import Cactus from './images/cactus2.png';
import { ParallaxProvider, useRef, useParallax, styles } from 'react-scroll-parallax';

import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const StaticMenu = () => {
  const aboutSection = useScrollSection('about');
  const contactSection = useScrollSection('contact');
  const resumeSection = useScrollSection('resume')
  const workSection = useScrollSection('work')

  return (
    <ul className='Nav'>
      <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
       About
      </li>
      <li onClick={workSection.onClick} selected={workSection.selected}>
       Work
      </li>
      <li onClick={contactSection.onClick} selected={contactSection.selected}>
       Contact
      </li>
     
      <li onClick={resumeSection.onClick} selected={resumeSection.selected}>
       Resume
      </li>
    </ul>
  );
};


function App() {
  return (
    <div className='App'>
    <ScrollingProvider>
    <StaticMenu />
    <Section id="about"><About/></Section>
    <ParallaxProvider scrollAxis="horizontal">
    <Section id="work"><Work/></Section>
    </ParallaxProvider>
    <Section id="contact"> <Contact/> </Section>
    <Section id="resume"> <Resume/> </Section>
  </ScrollingProvider>

  </div>
  )
}

export default App;
