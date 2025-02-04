

function Practice1({person, backGround}) {
  
  
    return (
      <>
        <div className="flex justify-center">
          <div className={`flex flex-col items-center font-mono shadow-xl py-7 ${backGround}`}>
            <h2 className="px-4 py-2 text-bold text-3xl  m-4 text-center">Mis datos personales</h2>
            <ul>
              <li className="p-2 text-xl"><span className="font-bold">First Name : </span> <span className="text-gray-700">{person.firstName}</span></li>
              <li className="p-2 text-xl"><span className="font-bold">Last Name : </span> <span className="text-gray-700">{person.lastName}</span></li>
              <li className="p-2 text-xl"><span className="font-bold">Phone : </span><span className="text-gray-700">{person.phone}</span></li>
              <li className="p-2 text-xl"><span className="font-bold">Laptop : </span> <span className="text-gray-700">{person.laptop}</span></li>
            </ul>
          </div>
        </div>
  
      </>
    )
  }
  
  export default Practice1;
  