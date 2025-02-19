import { ReactTyped } from 'react-typed';
import Button from './Button';
import { Link } from 'react-router-dom';
import { GiThrownCharcoal } from "react-icons/gi";


export default function Hero() {
    return (
        <div className="flex justicy-center items-center text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center p-10">
                <div className="flex justify-center text-[#26de9a] font-bold pt-2"><GiThrownCharcoal size={50} color="#26de9a"></GiThrownCharcoal></div>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold  text-[#26de9a] md:py-4">Carbon Trace</h1>
                <div className="flex flex-col justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold">Real time tracking</p>
                    <div className="leading-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-[#26de9a]  md:text-5xl sm:text-4xl text-xl font-bold mt-2"> 
                        <ReactTyped
                            strings={["Theft Detection", "Graphical insights"]}
                            typeSpeed={70}
                            backSpeed={50}
                            loop
                        />
                    </div>
                    <div>
                    <Link to={"/signup"}><button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-5">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
