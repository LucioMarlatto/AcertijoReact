import React from 'react'

function Juego (props){
    let [numeroUsuario, setNumeroUsuario] = React.useState(0)
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.limite) + 1)
    function comprobarNumeroUsuario(event){
        setNumeroUsuario(event.target.value)
    }

    function comprobarNumeroMaquina (){
        if (numeroUsuario == numeroMaquina){
            alert('Adivinaste perrito')
        } else {
            alert(`Le erraste pa, la respuesta era ${numeroMaquina}`)
        }
        setNumeroMaquina((Math.floor(Math.random() * props.limite) + 1))
    }
    return (
        <div>
            <p>Elije un numero del 1 al 10</p>
            <input type='number' placeholder='Escribe un numero' min={1} max={10} onChange={comprobarNumeroUsuario}></input>
            <br/>
            <button onClick={comprobarNumeroMaquina}>ADIVINAR</button>
        </div>
    )
}

export default Juego