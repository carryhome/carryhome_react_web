import React, {useState, useEffect} from 'react'
import { Input, TextField } from '@material-ui/core';

function WeatherFetch() {

  const [city, setCity] = useState(null)
  const [search, setSearch] = useState('Mumbai')

  const avinashWeatherApp = '498829c35b8b6426512a21e4716c235d'
  const [feels_like, setFeelsLike] = useState('')
  const [mainTemp, setMainTemp] = useState('')
  const [description, setDescription] = useState('')
  const [main, setMain] = useState('')
  const [iconID, setIconID] = useState('')

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search},ind&appid=${avinashWeatherApp}`
    )
    .then(res => res.json())
    .then(data => {
      if (data.cod == 200) {
        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);
        setCity(data)
      } else setCity(null)
    })
  }, [search])

  return (
    <>
    <Input type='search' value={search} placeholder='search by city ...' onChange= {event => {
      setSearch(event.target.value)
    }} />

    {!city ? (<h1> No data found! </h1>) : 
      (<>
        <h4>Main Temperature : <span style={{color:'blue'}}>{mainTemp}</span> Degrees Celsius</h4>
        <h4>Feels like : <span style={{color:'blue'}}>{feels_like}</span> Degrees Celsius</h4>
        <h4>Weather Parameter : <span style={{color:'blue'}}>{main}</span></h4>
        <h4>Description : <span style={{color:'blue'}}>{description}</span></h4>
        <img src={`http://openweathermap.org/img/wn/${iconID}@2x.png`} />
    </>)
    }
    </>
  )
}

export default WeatherFetch