import { useState } from "react"
import Image from "next/image"
import Clouds from "../../../public/images/clouds.png"


import Logo from "../../../public/images/jerryWeather.png"


export default function Header(){
    return (
        <div className="flex w-full">
            <div className="flex flex-row w-full items-center justify-between gap-x-4 ">
                <div className="flex justify-between">
                    <Image src={Logo} alt="logo" width={50} height={50}/>
                </div>
                <div className="flex justify-between">
                    <Image src={Clouds} alt="clouds" width={200}/>
                </div>
            </div>
        </div>
    )
}