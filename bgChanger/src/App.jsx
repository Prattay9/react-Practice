import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    
      <div className="w-full h-screen ease-in-out duration-500 "
        style={{ backgroundColor: color }}
      >
      <div className="mainContainer fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg px-3 py-2 rounded-2xl">
          <button 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
           <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
           <button
            className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("violet")}
          >
            Violet
          </button>
          <button
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
           
        </div>
      </div>
      </div>
   
  );
}

export default App;
