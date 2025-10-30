import './App.css'

export function Tarjeta({
    nombre, 
    titulo, 
    descripcion, 
    imgFondo, 
    icon, 
    imgGameplay, 
    imgGameplay1, 
    imgGameplay2 ,  
    juegoDescripcion1,  
    juegoDescripcion2,  
    juegoDescripcion3,
    tituloJuego}) {

  return (

    <div className="Conteiner">
        {/* Banner del personaje */}
        <div  className="tarjeta" 
            style={{
            backgroundImage: `url(${imgFondo})`,
            }}
            >
            <h1>{titulo}</h1>
        </div>

        {/* introduccion del personaje*/}
        <h2>
            {nombre} 
            <img className='icon' src={icon} alt="icon de sonic , shadow silver " />

            
            
        </h2>
        
        {/* descripción del personaje*/}
        <p>{descripcion}</p> 

        {/* conteiner de biografia del personaje*/}
        <div className='gameplayFlex'> 

            {/* titulo del juego*/}
            <h3 className='tituloJuego'>
                {tituloJuego[0]}
            </h3> 

            {/* imagenes del juego*/}
            <div className='gameplayImg' id='item1'>
                <img src={imgGameplay} alt="sonic" />
                <p>{juegoDescripcion1}</p>
            </div>

            {/* titulo del juego*/}
            <h3 className='tituloJuego'>
                {tituloJuego[1]}
            </h3> 

            {/* imagenes del juego*/}   
            <div className='gameplayImg' id='item2'>
                <p>{juegoDescripcion2}</p>
                <img src={imgGameplay1} alt="silver" />
            </div>

            {/* titulo del juego*/}
            <h3 className='tituloJuego'>
                {tituloJuego[2]}
            </h3> 

            {/* imagenes del juego*/}
            <div className='gameplayImg' id='item3'>
                <img src={imgGameplay2} alt="shadow" />
                <p>{juegoDescripcion3}</p>
            </div>
        </div>
    </div>
  )
}
