import Image from "next/image"

import Logo from "../../../public/images/jerryWeather.png"


export default function Header(){
    return (
        <div className="flex w-full">
            <div className="flex flex-row w-full items-center justify-between gap-x-4 ">
                <div className="flex justify-between">
                    <Image src={Logo} alt="logo" width={50} height={50}/>
                </div>
                <form>
                    <input className="rounded-xl h-12" type="text" placeholder="search..."/>
                </form>
            </div>
        </div>
    )
}