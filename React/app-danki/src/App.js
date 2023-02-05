import './App.css';
import React, { useState, useEffect } from 'react';



function App() {
 
  const [hora, setHora] = useState(22);
  const [minutos, setMinutos] = useState(40);
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
      const interval = setInterval(() => {
        setSegundos(segundos +1)
        if(segundos == 60){
          setSegundos(0)
          setMinutos(minutos+1)
          if(minutos == 60){
            setMinutos(0)
            setHora(hora+1)
          }
        }
      },1000)

      return () => clearInterval(interval);
  });

  return (
    <div className='relogio'>
    <h2>{hora}:{minutos}:{segundos}</h2>
    </div>
  );

}

export default App;
