import { useState } from "react"

const ConditionalRendering = () => {
    const [conditional, setConditional] = useState(true);
    return (
        <div>
            {conditional ?
                <div className="font-mono leading-loose bg-cyan-200 p-7 w-3/5 md:w-1/2 2xl:w-1/3 m-auto">
                    <h2 className="text-center text-3xl m-5">Welcome Mr. Joe</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit ullam odit aliquam nulla ad quam iusto, dolor illo? Nihil laboriosam placeat molestiae atque, cumque voluptate ab eveniet pariatur harum?</p>

                </div>
                :
                <div className="font-mono leading-loose bg-rose-500 p-7 w-3/5 md:w-1/2 2xl:w-1/3 m-auto text-white">
                    <h2 className="text-center text-3xl m-5 font-semibold">You need to Log In</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi impedit ullam odit aliquam nulla ad quam iusto, dolor illo? Nihil laboriosam placeat molestiae atque, cumque voluptate ab eveniet pariatur harum?</p>

                </div>
            }
            <div className="flex justify-center p-7">
            <button onClick={()=>setConditional(!conditional)} className="px-4 py-2 bg-black font-semibold text-white shadow-lg  rounded-md">{conditional?"Log Out": "Log In"}</button>
            </div>
            

        </div>
    )
}

export default ConditionalRendering;