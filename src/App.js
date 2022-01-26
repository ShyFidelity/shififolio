
import './App.css';
import About from '../src/components/About'
import Contact from '../src/components/Contact'
import Resume from './components/Resume';
import Work from './components/Work'
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
    <ul>
      <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
       About
      </li>
      <li onClick={contactSection.onClick} selected={contactSection.selected}>
       Contact
      </li>
      <li onClick={workSection.onClick} selected={workSection.selected}>
       Work
      </li>
      <li onClick={resumeSection.onClick} selected={resumeSection.selected}>
       Resume
      </li>
    </ul>
  );
};


function App() {
  return (
    <ScrollingProvider>
    <StaticMenu />
    <Section id="about"><About/></Section>
    <Section id="contact"> <Contact/> </Section>
    <Section id="work"><Work/></Section>
    <Section id="resume"> <Resume/> </Section>
  </ScrollingProvider>
  )
}

export default App;
