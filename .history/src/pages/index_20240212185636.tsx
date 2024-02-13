
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
      setCity('');
    }


  
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col w-5xl justify-between w-full items-center  text-sm ">
        <div className="flex flex-row w-full items-center justify-between gap-x-4 p-12">
          <Header></Header>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Current Location</div>
          <div className="font-bold">Five day weather forecast</div>
          <form onSubmit={handleSubmit}>
            <input className="rounded-xl h-12 w-48 p-4" type="text" placeholder="search..." value={city} onChange={handleLocation}/>
          </form>

          {data && data.main && data.weather && data.wind && data.dt &&(
            <div>
              {data.weather.map((d, index)=> (
                <div key={index}>
                  <h1>Weather: {d.main}</h1>
                </div>
              ))}
              <h1>Temperature: {data.main.temp}</h1>
              <h1>Wind: {data.wind.speed}</h1>
              <h1>Date: {formatDate(data.dt)}</h1>
            </div>
          )}

          {forcast && forcast.list && (
            <div>
              {forcast.list.map((d, index)=> (
                <div key={index}>
                  <h1>Temp: {d.main.temp.toFixed(1).slice(2,5)}</h1>
                  {d.weather.map((d, index)=> (
                <div key={index}>
                  <h1>Weather: {d.main}</h1>
                </div>
              ))}
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
