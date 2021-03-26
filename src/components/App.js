
import React from 'react';
import Form from './Form';
import Weather from './Weather';
import '../index.css'

const ApiKey="698775153f62c0170e445e0cf52db81d";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            city:undefined,
            country:undefined,
            icon:undefined,
            main:undefined,
            celsius:undefined,
            temp_max:undefined,
            temp_min:undefined,
            description:"",
            error:false
        }
       

        this.weatherIcon={
            Thunderstorm:"thunderstorm",
            Drizzle:"cloud-sleet",
            Rain:"cloud-showers-heavy",
            Snow:"cloud-snow",
            Atmosphere:"fog",
            Clear:"sun",
            Clouds:"cloud"
        }
        
    }
    // api.openweathermap.org/data/2.5/weather?q=London&appid
 calCelsius=(temp)=>{
let cel=Math.floor(temp-273.15)  // converting double into int
return cel;
 }

get_WeatherIcon(rangeId){
    switch(true){
        case rangeId>=200 && rangeId<=232:
            this.setState({icon:this.weatherIcon.Thunderstorm})
            break;
            case rangeId>=300 && rangeId<=321:
                this.setState({icon:this.weatherIcon.Drizzle})
                break;
                case rangeId>=500 && rangeId<=531:
                    this.setState({icon:this.weatherIcon.Rain})
                    break;
                    case rangeId>=600 && rangeId<=622:
                        this.setState({icon:this.weatherIcon.Snow})
                        break;
                        case rangeId>=701 && rangeId<=781:
                            this.setState({icon:this.weatherIcon.Atmosphere})
                            break;
                            case rangeId==800:
                                this.setState({icon:this.weatherIcon.Clear})
                                break;
                                default:

                                    this.setState({icon:this.weatherIcon.Clouds})
                                    

    }

}

    getWeather=async(e)=>{
e.preventDefault();
const city=e.target.elements.city.value;
const country=e.target.elements.country.value;
if(city&&country)
    {    const Api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`
    )
    const response=await Api_call.json();
    console.log(response)
    this.setState({
        city:`${response.name},${response.sys.country}`,
         
        celsius:this.calCelsius(response.main.temp),
        temp_max:this.calCelsius(response.main.temp_max),
        temp_min:this.calCelsius(response.main.temp_min),
        description:response.weather[0].description,
        icon:this.get_WeatherIcon,
        error:false

    })
    this.get_WeatherIcon(response.weather[0].id)
}else{
    this.setState({error:true})
}

    }

    render(){
        return(
            <div className="App">
                <Form loadweather={this.getWeather} error={this.state.error}></Form>
                <Weather city={this.state.city}
                country={this.state.country}
                temp_celsius={this.state.celsius}
                temp_max={this.state.temp_max}
                temp_min={this.state.temp_min}
                description={this.state.description}
                weatherIcon={this.state.icon}

                
                
                >


                </Weather>

            </div>
        )
    }
}


export default App;