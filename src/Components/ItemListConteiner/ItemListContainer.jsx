import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import {getProductos, getProductoPorCategoria} from "../Asycmocks"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"

const ItemListContainer =()=>{

    const {idCategoria}= useParams()


    const [productos, setProductos] = useState([])

        useEffect(()=>{
            const funcionProductos = idCategoria ? getProductoPorCategoria : getProductos;

            funcionProductos(idCategoria)
             .then(res=>setProductos(res))

        }, [idCategoria])
    
    return(
        <>
        <h2 className="titleItemListContainer">Mis Productos</h2>
        <ItemList productos={productos}></ItemList>
        </>
    )
}

export default ItemListContainer