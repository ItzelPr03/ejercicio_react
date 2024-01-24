
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import foto_card from '../../assets/foto_personal.jpeg'
import './mycard.css'

export default function MyCard() {
    const {name,position,city, age, email, info}={
        name: "Itzel Perez",
        position:"Java FullStack Developer||Chemist",
        age: 28,
        city: "Mexico city",
        email: "itzelperez.rq@gmail.com",
        info: "Estoy emocionada por aprender y comenzar mi carrera como developer",
        
    };

  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="mi foto"
        height="200px"
        width= "200px"
        image= {foto_card}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {position}
        </Typography>
        <Typography variant="h7" color="text.secondary" component='div'>
            {age}
        </Typography>
        <Typography variant='h7' color= 'text.secondary'>
            {city}
        </Typography>
        <Typography variant= 'h7'component ='div'>
            {email}
        </Typography>
        <Typography variant= 'h7'component ='div' color='InfoText'>
            {info}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


