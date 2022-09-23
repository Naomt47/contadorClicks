import React from "react";
import '../styleSheet/Contador.css'
function Contador({ numClics }){
  return(
    <div className="contador">
      {numClics}
    </div>
  );
}

export default Contador