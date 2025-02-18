import Hero from "../components/Hero"
// import logo from "CoalTrace/frontend/public/Carbon.jpeg"

export default function Landing(){
    return(
        <div className="bg-gray-800 min-h-screen flex justify-center items-center">
            <div className="flex flex-row justify-center bg-gray-900 drop-shadow-3xl border-2 hover:border-[#26de9a]">
            <div className="flex justify-center items-center"><Hero></Hero></div>
            <div className="hidden md:block"><img src="/Carbon.jpeg" alt="Logo" /></div>
            </div>
            
        </div>
    )
}