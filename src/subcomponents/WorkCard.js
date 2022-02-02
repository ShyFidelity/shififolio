import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../styles/portCard.css'
import ghLogo from '../images/ghlogosm.png'
import '../App.css'



export default function WorkCard(props) {

    return (
        <div>    
    <Card className="card" sx={{ width: 300 , height: 350}}>
    <CardMedia
         style={{  marginTop: '5%'}}
        component="img" 
        padding="10px"
        height="280"
        image={props.img}
        alt={props.alt}
      />
      <CardContent>
        <Typography className="cardtext" gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography className="cardtext" variant="body2">
        {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"> <a href={props.link}> live </a></Button>
        <Button size="small"> <a href={props.github}> <img src= {ghLogo} alt="gh logo" /> </a> </Button>
      </CardActions>
    </Card>

        </div>
    )
    
}