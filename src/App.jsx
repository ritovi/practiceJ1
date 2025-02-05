import Counter from "./components/Counter";
import Practice1 from "./components/Practice1"

import people from "./utils/people";

const {person1, person2, person3, person4} = people;

function App() {
  
  return (
    <>
    <div className="flex flex-wrap gap-7 justify-around ">
      <Practice1 person={person1}/>
      <Practice1 person={person2} backGround={"bg-slate-200"} />
      <Practice1 person={person3} backGround={"bg-indigo-200"}/>
      <Practice1 person={person4} backGround={"bg-teal-200"}/>
      <Counter/>
    </div>
     


    </>
  )
}

export default App
