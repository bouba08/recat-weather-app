import { useEffect, useState } from "react"

const Weather =  () => {
    const [data, setData] = useState("")
    const [input, setInput] = useState("")
    const [inpVal, setInpVal] = useState([])
    
        

    const fetchData = async () =>{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=e7379634c4453e11eea8065725ba733e&units=metric`)
        const advice = await response.json()
        setData(advice)
        console.log(data.main.temp)
    }

    useEffect(()=>{
        fetchData()
    }, [])


    return (
        <div>
            <h1>Weather App</h1>
            <div>
            <h1>london</h1>
            <input></input>
            {/* <span>{data.weather.description}</span> */}
            <button onClick={fetchData}>Weather</button>
            <div>
            <span>Description: {data.weather[0].description}</span>
            <span>Temperature: {data.main.temp}</span>
            <span>Max temp: {data.main.temp_max}</span>
            <span>Min temp: {data.main.temp_min}</span>
            <span>Humidity: {data.main.humidity}</span>
            <span>Wind speed: {data.wind.speed}</span>
            </div>
            
        </div>
            
        </div>
    )
}

export default Weather