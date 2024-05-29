import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [catfact,setcatfact]=useState("")
  const fetchdata=async()=>{
    const {data}=await axios.get("https://catFact.ninja/fact")
    setcatfact(data.fact)
  }
  useEffect(()=>{
fetchdata()
  },[])
  return (
    <div className="flex h-screen justify-center items-center flex-col px-10">
     <button className="flex bg-yellow-500 px-4 py-2 font-bold text-xl border border-black" onClick={fetchdata}>Generate cat fact</button>
     <h1 className="text-2xl mt-10 text-blue-800">{catfact}</h1>
    </div>
  );
}

export default App;
