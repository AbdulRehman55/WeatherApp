import React from 'react';
import { Grid } from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Box from '@material-ui/core/Box';
import './Wstyle.css';


const Weather=(props)=>{
    return(
        <div className="container">
            <div className="container2">
        <Grid container direction="column" alignItems="center"
        justify="center">
            <h1>{props.city}</h1>
            <i class={`fas fa-${props.weatherIcon} fa-4x`}></i>




            {props.temp_celsius ? <h3>{props.temp_celsius}&deg;</h3>:null }

           {MinMaxTemp(props.temp_min,props.temp_max)}
           <h4>{props.description}</h4>
            </Grid>
            </div>
            </div>
    )
}

function MinMaxTemp(min,max){
    if(min && max)
    return(
        <div>
       
        <h3>
            
            <Box component="div" display="inline" m={5}>{min}&deg;</Box>
             
            <Box component="div" display="inline" m={5}>{max}&deg;</Box>
               
            </h3>
    </div>
    )
}


export default Weather;