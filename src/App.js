//import { useState, useEffect } from "react";
//import { useState } from "react";
import "./App.css";

//import getGifs from "./services/getGifs";
import GifsList from "./components/GifsList";

function App() {
  //const [keyword, setKeyword] = useState("panda");

  return (
    <div className="App">
      <section className="App-content">
  
        <GifsList keyword={'panda'} />
      </section>
    </div>
  );
}

export default App;
