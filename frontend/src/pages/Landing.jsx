import Hero from "../components/Hero"
// import logo from "CoalTrace/frontend/public/Carbon.jpeg"

export default function Landing(){
    return(
        <div className="bg-gray-800 min-h-screen flex justify-center items-center">
            <div className="flex w-full flex-row  2xl:w-4/5 justify-center h-full bg-gray-900 drop-shadow-3xl border-2 hover:border-[#26de9a]">
            <div className="flex justify-center w-full m-0 items-center"><Hero></Hero></div>
            <div className="hidden md:block w-full m-0 2xl:w-1/2"><img className="h-full w-full" src="/Carbon.jpeg" alt="Logo" /></div>
            </div>
            
        </div>
    )
}