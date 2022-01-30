



import '../styles/portCard.css'
import Snake from '../images/orog.png'
import Weather from '../images/weatherSS.png'
import WorkCard from '../subcomponents/WorkCard'




const boxStyle = {
    height: '500px',
    width: '100vw', 
    margin:0,
    backgroundColor: 'green'

}

const projects = [
  {
    title: 'Ouroboros', 
    img: Snake, 
    alt: 'snake colorful graphic',
    description: 'mental health app',
    link: 'https://ouroboros-ml-jf-ni.herokuapp.com/',
    github: 'https://github.com/ShyFidelity/Ouroboros',
    id: 1
  }, 
  {
    title: 'What\'s the Weather', 
    img: Weather, 
    alt: 'screenshot of weather app',
    description: 'weather app',
    link: 'https://ouroboros-ml-jf-ni.herokuapp.com/',
    github: 'https://github.com/ShyFidelity/Ouroboros',
    id: 2
  }, 




]

export default function Work() {
  return (
    <div>
      <h1>WORK</h1>
      {projects.map((work) => (
        <WorkCard title={work.title} img={work.img} alt={work.alt} description={work.description} link={work.link} github={work.github}key={work.id} />
      ))}
    </div>

  );
}

