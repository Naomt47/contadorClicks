
import './App.css';
import Boton from './componentes/Boton';
import logoFree from "./imagenes/logoFree.jpg"
import Contador from './componentes/Contador';
//para usar Hooks debemos importarlo
import { useState } from 'react';

function App() {
  //[estado, funcion]         useState(valor inicial del contador,)           
  const [numClics, setNumClics ] = useState(0);
  

  //funcion llamada manejar clic, parametros dentro de () y retorna lo que esta entre {}
  const manejarClic = () => {
    //imprimir en consola  
    console.log("Clic");
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () =>{
    console.log('Reiniciar')
    //valor que quiero pasar
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={logoFree}
          alt='Logo de freeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClics={ numClics }
        />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>

      
    </div>
  );
}

export default App;
