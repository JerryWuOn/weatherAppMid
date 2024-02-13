import { useState } from "react"
import Image from "next/image"

import Logo from "../../../public/images/jerryWeather.png"


export default function Header(){
    const [location, setLocation] = useState('');

    const handleLocation = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search value:', location);
    }
    return (
        <div className="flex w-full">
            <div className="flex flex-row w-full items-center justify-between gap-x-4 ">
                <div className="flex justify-between">
                    <Image src={Logo} alt="logo" width={50} height={50}/>
                </div>
                <form onSubmit={handleSubmit}>
                    <input className="rounded-xl h-12 w-48 p-4" type="text" placeholder="search..." value={location} onChange={handleLocation}/>
                </form>
            </div>
        </div>
    )
}