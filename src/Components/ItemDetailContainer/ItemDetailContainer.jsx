import { useEffect, useState } from "react"
import { getUnProducto } from "../Asycmocks"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ()=>{

    const {idItem} = useParams()

    const [producto, setProducto]= useState(null)

    useEffect(()=>{

        getUnProducto(idItem)
        .then(respuesta => setProducto(respuesta))


    },[idItem])
    return(
        <div>
            <ItemDetail {...producto}/>
        </div>

    )
}

export default ItemDetailContainer