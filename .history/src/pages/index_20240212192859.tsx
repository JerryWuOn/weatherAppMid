
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState} from "react";

export default function Home() {
  const [data,setData] = useState<IWeather | null>(null);
  const [forcast,setForcast] = useState<IForecast| null>(null);

  const [city, setCity] = useState('');

    const handleLocation = (jerry) => {
        setCity(jerry.target.value);
    }

    const formatDate = (timestamp) => {
      return new Date(timestamp * 1000).toLocaleDateString('en-Ca', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };

    const handleSubmit = (jerry) => {
        jerry.preventDefault();
        const apiKey = "fa86376a0b2615057a19374755185488"
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        const API_fiveDay = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`


      fetch(API_URL)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setData(response);
      })
      .catch(err => {
        console.log(err);
      })

      fetch(API_fiveDay)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setForcast(response);
      })
      .catch(err => {
        console.log(err);
      })
    }


  
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col w-5xl justify-between w-full items-center  text-sm ">
        <div className="flex flex-row w-full items-center justify-between gap-x-4 p-12">
          <Header></Header>
        </div>
        <div className="flex flex-col justify-center text-center w-full">
          <div className="font-bold text-3xl">Jerry On</div>
          <div className="font-bold">Current Location</div>
          <div className="font-bold mb-6">Five day weather forecast</div>
          <div className="font-bold mb-6">Enter City Below:</div>
          <form onSubmit={handleSubmit}>
            <input className="rounded-xl h-12 w-48 p-4 mb-6" type="text" placeholder="search..." value={city} onChange={handleLocation}/>
          </form>

          {data && data.main && data.weather && data.wind && data.dt &&(
            <div className="flex flex-col w-full px-12 items-center">
              {data.weather.map((d, index)=> (
                <div key={index}>
                  <div className="flex w-full">
                    <h1 className="text-4xl">{city}</h1>
                    <h1 className="flex flex-start">Weather: {d.main}</h1>
                  </div>
                </div>
              ))}
              <h1>Temperature: {data.main.temp}</h1>
              <h1>Wind: {data.wind.speed}</h1>
              <h1>Date: {formatDate(data.dt)}</h1>
            </div>
          )}

          {forcast && forcast.list && (
            <div>
              {forcast.list.slice(0,1).map((d, index)=> (
                <div key={index}>
                  <h1>Temp: {d.main.temp.toFixed(1)}</h1>
                  {d.weather.map((d, index)=> (
                <div key={index}>
                  <h1>Weather: {d.main}</h1>
                  
                </div>
                
              ))}
              {d.weather.map((d, index)=> (
                <div key={index}>
                  <h1>Description: {d.description}</h1>
                </div>
              ))}
                <h1>Wind Speed: {d.wind.speed}</h1>
                <h1>Date: {formatDate(d.dt)}</h1>
                </div>
              ))}
              
            </div>
          )}

        </div>
        </div>

        <div className="flex bg-footer w-full bg-fixed text-white mt-16 px-12">
          <div className="flex h-24 w-full items-center justify-between">
            <Footer/>
          </div>
        </div>

    </main>
  );
}
