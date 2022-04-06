import "../styles/portCard.css";
import Snake from "../images/orog.png";
import Weather from "../images/weatherSS.png";
import WorkCard from "../subcomponents/WorkCard";
import Ivy from "../images/ivygoing.png";
import Toto from '../images/totosmall.png'
import Github from '../images/github-brands.svg'


const boxStyle = {
  height: "600px",
  width: "100vw",
  padding: "300px",
  margin: 0,
  
 
};

const mediastyle = {
  height: "150px", 
  width: "150px"
}

// const projects = [
//   {
//     title: "Ivy Nails",
//     img: Ivy,
//     alt: "screenshot of ivy nails website",
//     description: "First freelance project for local salon",
//     link: "https://shyfidelity.github.io/ivy/",
//     github: "https://github.com/ShyFidelity/ivy",
//     id: 1,
//   },
//   {
//     title: "Friends of Toto",
//     img: Toto, 
//     alt: "screenshot of ivy toto website",
//     description: "Pet Social media Full MERN stack app",
//     link: "https://shyfidelity.github.io/ivy/",
//     github: "https://github.com/ShyFidelity/ivy",
//     id: 1,
//   },

//   {
//     title: "Ouroboros",
//     img: Snake,
//     alt: "snake colorful graphic",
//     description: "mental health app",
//     link: "https://ouroboros-ml-jf-ni.herokuapp.com/",
//     github: "https://github.com/ShyFidelity/Ouroboros",
//     id: 2,
//   },
//   {
//     title: "What's the Weather",
//     img: Weather,
//     alt: "screenshot of weather app",
//     description: "weather app",
//     link: "https://ouroboros-ml-jf-ni.herokuapp.com/",
//     github: "https://github.com/ShyFidelity/Ouroboros",
//     id: 3,
//   },


// ];

export default function Work() {
  return (
    <div >

      <img width="300px"src={Github} alt="github logo" />
      {/* <h1>WORK</h1>

    <div className="work-data">
      {projects.map((work, idx) => (
        <WorkCard
        className="rounded w-56 h-64 object-cover"
          title={work.title}
          img={work.img}
          alt={work.alt}
          description={work.description}
          link={work.link}
          github={work.github}
          key={idx}
        />
      ))} */}
      </div>
    
  );
}



