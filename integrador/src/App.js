import { useState } from "react";
import Intro from "./components/Intro";
import Preguntas from "./components/Preguntas";
import Footer from "./components/Footer";
import Filtrado from "./components/Filtrado";

function App() {
  const [cuerpo, setCuerpo]= useState("Productos");

  let render;

  switch(cuerpo)
  {
    case "Productos":
      render= <Filtrado/>
      break;
    case "Preguntas":
      render=<Preguntas/>
      break;
  }
  return (
    <>
    <Intro setCuerpo={setCuerpo}/>
    {render}
    <Footer />
    </>
  );
}

export default App;
