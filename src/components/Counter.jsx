import { useState } from "react";

const Counter =()=>{
    const [counter, setCounter] = useState(1);
    let doubleCounter = counter*3;
    return (
        <div className="px-7 pt-6 pb-4 mx-7  shadow-lg">
            <div className="flex justify-around">
            <h2 className="my-3 text-4xl text-center">{counter}</h2>
            <h2 className="my-3 text-4xl text-center">{doubleCounter}</h2>
            </div>
            
            <button className=" text-2xl m-1 cursor-grabbing px-4 py-2 bg-gray-50 rounded-lg font-mono font-semibold hover:bg-gray-100" onClick={()=>setCounter(counter -1)}>-</button>
            <button className="  text-2xl m-1 cursor-pointer px-4 py-2 bg-gray-50 rounded-lg font-mono font-semibold hover:bg-gray-100" onClick={()=>setCounter(1)}>R</button>
            <button className=" text-2xl m-1 cursor-grabbing px-4 py-2 bg-gray-50 rounded-lg font-mono font-semibold hover:bg-gray-100" onClick={()=>setCounter(counter +1)}>+</button>
            
            
        </div>
    )
};

export default Counter;