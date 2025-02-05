import { useState } from "react";

const Counter =()=>{
    const [counter, setCounter] = useState(0);
    return (
        <div className="px-7 pt-6 pb-4 mx-7  shadow-lg">
            <h2 className="my-3 text-4xl text-center">{counter}</h2>
            <button className=" text-2xl m-1 cursor-grabbing px-4 py-2 bg-gray-50 rounded-lg font-mono font-semibold hover:bg-gray-100" onClick={()=>setCounter(counter -1)}>-</button>
            <button className="  text-2xl m-1 cursor-pointer px-4 py-2 bg-gray-50 rounded-lg font-mono font-semibold hover:bg-gray-100" onClick={()=>setCounter(0)}>R</button>
            <button className=" text-2xl m-1 cursor-grabbing px-4 py-2 bg-gray-50 rounded-lg font-mono font-semibold hover:bg-gray-100" onClick={()=>setCounter(counter +1)}>+</button>
        </div>
    )
};

export default Counter;