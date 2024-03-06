import { useEffect, useState } from "react"
import "./App.css"
import clear from "./images/clear.jpeg"
import rain from  "./images/rain.jpg"
import clouds from  "./images/clouds.jpeg"
import mist from "./images/mist.png"

const Weather =  () => {
    const [data, setData] = useState('')     
    const [input, setInput] = useState('london')
    const [inpVal, setInpVal] = useState(null)
    const [error, setError] = useState(null)

    const fetchData = async () =>{
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            const advice = await response.json()
            setData(advice)
            setError(null)      
        } catch(error) {
            setError(error.message)
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setInpVal(...input)
        setInput('')    
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const weather = {
        "Clouds": clouds,
        "Clear": clear,
        "Rain": rain,
        "Mist": mist,
    }

    return (
        <div className="weather">
            <h1 className="title">Weather App</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={input}
                        onChange={(e)=>setInput(e.target.value)} 
                        className="input"
                    />
                    <button className="button" onClick={fetchData}>Weather</button>
                </form>
                {inpVal && data && (
                    <div className="info">
                        <h2 className="info-subtitle">
                            {data.name} weather: {data.weather[0].main}
                        </h2>
                        <img
                            width="234px"
                            height="150px"
                            className="info-img"
                            src={weather[data.weather[0].main]}
                            alt=""
                        />
                        <span className="info-span">
                            Description: {data.weather[0].description}
                        </span>
                        <span className="info-span">Temperature: {data.main.temp}°C</span>
                        <span className="info-span">Max temperature: {data.main.temp_max}°C</span>
                        <span className="info-span">Min temperature: {data.main.temp_min}°C</span>
                        <span className="info-span">Humidity: {data.main.humidity}%</span>
                        <span className="info-span">Wind speed: {data.wind.speed}mph</span>
                    </div>
                )}
                {error && <div>Error: {error}</div>}
            </div>
        </div>
    )
}

export default Weather
