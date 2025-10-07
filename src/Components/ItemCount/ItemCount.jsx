import { useState } from "react"
import React from "react"
import "../ItemCount/ItemCount.css"

const ItemCount = ({stock, funcionAgregar, inicial}) =>{

    const [contador, setContador] = useState(inicial)
    const incrementar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () =>{
        if(contador > inicial){
            setContador(contador - 1)
        }
    }
    return(
        <>
        <div className="buttonContainer">
            <button onClick={incrementar} className="buttonSum"> + </button>
            <p className="Count">{contador}</p>
            <button onClick={decrementar} className="buttonRes"> - </button>
        </div>
            <button onClick={()=>funcionAgregar(contador)} className="buttonAgregar">Agregar al Carrito</button>
        
        </>
    )
}

export default ItemCount