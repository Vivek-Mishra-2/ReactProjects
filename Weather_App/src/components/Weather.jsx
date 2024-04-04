// import { useState, useEffect } from "react"
// import bg1 from "../assets/sunny.jpg"
// import winter from '../assets/winter1.jpg'

// function Weather() {

//   const [search, setSeach] = useState("Kanpur")
//   const [city, setCity] = useState("")
//   const [bg, setBg] = useState({bg1})

//   useEffect(() => {
//     const fetchApi = async () => {
//       if(!search) setBg(bg1)
//       const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=220ada3bb7b4fad238231b7dc1e502ae`
//       const response = await fetch(url)
//       const resJson = await response.json()
//       console.log(resJson)
//       setCity(resJson.main)
//       setBg(resJson.main.temp > 30 ? bg1 : winter)
//       return;
//     }

//     const delay = setTimeout(() => {
//       fetchApi();
//     }, 500); // Adjust the debounce delay as needed

//     return () => clearTimeout(delay);
//   }, [search]);

//     // fetchApi()
//   // }, [search])

  
//   return (
  
//     <div className="flex h-screen w-screen justify-center items-center"
//     style={{backgroundImage: `url(${bg})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             width: '100%',
//             height: '100vh'
//     }}
//     >
//         <div className="text-center items-center flex justify-center flex-col mt-10 rounded-lg border-1 bg-gray-500 w-96 bg-opacity-50">
          
//             <h1 className="text-3xl font-bold">Weather App</h1>
//             <input type="text" 
//             placeholder="Enter city name"
//             className="border-2 rounded-lg border-gray-300 p-3 mt-4 outline-none focus:border-blue-500"
//             onChange={(e) => setSeach(e.target.value)}
//             />
//             {!city ? (
//               <p className="mt-8 p-6 rounded-lg bg-opacity-80 backdrop-blur-md shadow-md w-96">No Data Found</p>
//             ) : (
//               <div className="mt-8 p-6 rounded-lg bg-opacity-80 backdrop-blur-md shadow-md w-96">                
//                   <h2 className="font-bold text-white">{search.toUpperCase()}</h2>
//                   <p>Temperature: {city.temp}°C - {city.temp > 30 ? 'Hot' : 'Cool'}</p>
//               </div>
//             )
//             }
//         </div>
//       </div>
  
//   )
// }

// export default Weather

import { useState, useEffect, useMemo, useCallback } from "react";
import bg1 from "../assets/sunny.jpg";
import winter from "../assets/winter1.jpg";

function Weather() {
  const [search, setSearch] = useState("Kanpur");
  const [city, setCity] = useState("");
  const [bg, setBg] = useState(bg1);

  const fetchWeather = useCallback( async (search) => {
    if (!search) {
      setBg(bg1);
      setCity(null);
      return;
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=220ada3bb7b4fad238231b7dc1e502ae`;
    const response = await fetch(url);
    const resJson = await response.json();
    console.log(resJson);
    setCity(resJson.main);
    setBg(resJson.main.temp > 30 ? bg1 : winter);
  }, [search,setSearch]);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchWeather(search);
    }, 500);

    return () => clearTimeout(delay);
  }, [search]);

  const weatherInfo = useMemo(() => {
    if (!city) return <p className="mt-8 p-6 rounded-lg bg-opacity-80 backdrop-blur-md shadow-md w-96">No Data Found</p>;
    return (
      <div className="mt-8 p-6 rounded-lg bg-opacity-80 backdrop-blur-md shadow-md w-96">
        <h2 className="font-bold text-white">{search.toUpperCase()}</h2>
        <p>
          Temperature: {city.temp}°C - {city.temp > 30 ? "Hot" : "Cool"}
        </p>
      </div>
    );
  }, [city, search]);

  return (
    <div
      className="flex h-screen w-screen justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="text-center items-center flex justify-center flex-col mt-10 rounded-lg border-1 bg-gray-500 w-96 bg-opacity-50">
        <h1 className="text-3xl font-bold">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          className="border-2 rounded-lg border-gray-300 p-3 mt-4 outline-none focus:border-blue-500"
          onChange={(e) => setSearch(e.target.value)}
        />
        {weatherInfo}
      </div>
    </div>
  );
}

export default Weather;

