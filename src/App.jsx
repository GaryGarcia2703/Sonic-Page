import { Tarjeta } from "./tarjeta"
import { sonic , shadow, silver } from "./data/personajes.jsx"

export function App() {
  return(
  <>
    <Tarjeta nombre={sonic.nombre} 
    titulo={sonic.titulo} 
    descripcion={sonic.descripcion} 

    imgFondo={sonic.imagenTarjeta} 
    icon={sonic.icon}  
    imgGameplay={sonic.imgGameplay} 
    imgGameplay1={sonic.imgGameplay1}
    imgGameplay2={sonic.imgGameplay2}

    juegoDescripcion1={sonic.juegoDescripcion1}
    juegoDescripcion2={sonic.juegoDescripcion2}
    juegoDescripcion3={sonic.juegoDescripcion3}

    tituloJuego = {sonic.titulosJuegos}
    />

    <Tarjeta nombre={shadow.nombre}
    titulo={shadow.titulo}
    descripcion={shadow.descripcion}

    imgFondo={shadow.imagenTarjeta}
    icon={shadow.icon}
    imgGameplay={shadow.imgGameplay}
    imgGameplay1={shadow.imgGameplay1}
    imgGameplay2={shadow.imgGameplay2}

    juegoDescripcion1={shadow.juegoDescripcion1}
    juegoDescripcion2={shadow.juegoDescripcion2}
    juegoDescripcion3={shadow.juegoDescripcion3}

    tituloJuego={shadow.titulosJuegos}
    
    />

     <Tarjeta nombre={silver.nombre}
    titulo={silver.titulo}
    descripcion={silver.descripcion}

    imgFondo={silver.imagenTarjeta}
    icon={silver.icon}
    imgGameplay={silver.imgGameplay}
    imgGameplay1={silver.imgGameplay1}
    imgGameplay2={silver.imgGameplay2}

    juegoDescripcion1={silver.juegoDescripcion1}
    juegoDescripcion2={silver.juegoDescripcion2}
    juegoDescripcion3={silver.juegoDescripcion3}

    tituloJuego={silver.titulosJuegos}
    
    />
  </>
  ) 
  
}