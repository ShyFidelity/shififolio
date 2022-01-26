
import './App.css';
import About from '../src/components/About'
import Main from '../src/pages/Main'
import Contact from '../src/components/Contact'
import {
  ScrollingProvider,
  useScrollSection,
  Section,
} from 'react-scroll-section';

const StaticMenu = () => {
  const homeSection = useScrollSection('home');
  const aboutSection = useScrollSection('about');
  const contactSection = useScrollSection('contact')

  return (
    <ul>
      <li onClick={homeSection.onClick} selected={homeSection.selected}>
        Home
      </li>
      <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
       About
      </li>
      <li onClick={aboutSection.onClick} selected={aboutSection.selected}>
       Contact
      </li>
    </ul>
  );
};


function App() {
  return (
    <ScrollingProvider>
    <StaticMenu />
    <Section id="home"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error aliquam provident inventore ab maiores saepe amet accusamus ut ratione, in molestias sunt quae sequi accusantium tenetur, sit velit tempora voluptatem? </Section>
    <Section id="about"><About/></Section>
    <Section id="contact"> <Contact/> </Section>
  </ScrollingProvider>
  )
}

export default App;
