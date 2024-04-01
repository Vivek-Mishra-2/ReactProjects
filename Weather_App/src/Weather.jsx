import { useState, useEffect } from "react"
function Weather() {

  const [search, setSeach] = useState("Kanpur")
  const [city, setCity] = useState("")

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=220ada3bb7b4fad238231b7dc1e502ae`
      const response = await fetch(url)
      const resJson = await response.json()
      console.log(resJson)
      setCity(resJson.main)
    }
    fetchApi()
  }, [search])

  return (
    <>
        <div>
            <h1>Weather App</h1>
            <input type="text" 
            onChange={(e) => setSeach(e.target.value)}
            />
            {!city ? (
              <p>No Data Found</p>
            ) : (
              <div>
                  <h2>City: {search}</h2>
                  <h3>Temperature: {city.temp}</h3>
              </div>
            )
            }
          
        </div>
    </>
  )
}

export default Weather
