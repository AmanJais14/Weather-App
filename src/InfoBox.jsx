import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GrainIcon from '@mui/icons-material/Grain';


function InfoBox({data}) {

    let HOT_URL = "https://images.pexels.com/photos/1006121/pexels-photo-1006121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    let COLD_URL = "https://images.pexels.com/photos/2682122/pexels-photo-2682122.jpeg";
    let RAIN_URL = "https://images.pexels.com/photos/1463530/pexels-photo-1463530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

    const backgroundColor = data.humidity >= 80 && data.temp > 20 
        ? "rgb(79, 130, 189)" 
        : data.temp > 15 
        ? "lightyellow" 
        : "lightblue";
    

  return (
    <div style={{display : "flex", justifyContent:"center", alignItems:"center"}}>
        {/* <h1>Weather Info</h1> */}
        <Card sx={{ minWidth: 345 , maxWidth : 380, maxHeight: 580, backgroundColor : backgroundColor, boxShadow : 20}} >
      <CardMedia
        sx={{ height: 200 , backgroundPosition:"center"}}
        image={data.humidity >= 80 && data.temp > 20? RAIN_URL : data.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          <p><b>Weather {data.humidity >= 80 && data.temp > 20? <GrainIcon/> : data.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}</b></p>
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
            <p><b>City</b> : {data.city}</p>
            <p><b>temp</b> : {data.temp} C </p>
            <p><b>Humidity</b> : {data.humidity} </p>
            <p><b>Max.Temp</b> : {data.temp_max} C</p>
            <p><b>Min.Temp</b> : {data.temp_min} C</p>
            <p><b>Windspeed</b> : {data.windspeed} </p>
            <p><b>The weather can be described as {data.weather} and it feels like {data.feels_like}</b></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default InfoBox