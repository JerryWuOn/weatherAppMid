
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Home() {
  const [data,setData] = useState<IWeather | null>(null);
  const apiKey = "fa86376a0b2615057a19374755185488"
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}?&appid=${apiKey}`

  const city = e.target.value;

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        setData(response);
      })
      .catch(err => {
        console.log(err);
      })
  },[])
  return (
    <main className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col w-5xl justify-between w-full items-center  text-sm ">
        <div className="flex flex-row w-full items-center justify-between gap-x-4 p-12">
          <Header></Header>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Current Location</div>
          <div className="font-bold">Five day weather forecast</div>

          {data && data.main && (
            <div>
              <h1>Temperature: {data.main.temp}</h1>
              <h1>Feels Like: {data.main.feels_like}</h1>
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
