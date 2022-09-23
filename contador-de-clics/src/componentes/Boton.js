import React from "react";
import '../styleSheet/Boton.css';

//asignacion de props (3props)
function Boton({ texto, esBotonDeClic, manejarClic }){
  return(
    // si esBotonDeclic es verdadero, entonces le asigna el primer valor, de lo contrario le asigna el segundo
    <button className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
    //manejarClic es una funcion
    onClick={manejarClic}>
      {texto}
    </button>
  );
}


export default Boton;