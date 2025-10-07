import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { db } from "../../Services/config"
import { collection, getDocs, where, query } from "firebase/firestore"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"


const ItemListContainer =()=>{

    const {idCategoria}= useParams()
    const [loading, setLoading] = useState(false)


    const [productos, setProductos] = useState([])

    
    useEffect(()=>{
        setLoading(true)
        const misProductos = idCategoria ? query(collection (db, "productos"), where("idCat", "==", idCategoria)) : collection(db, "productos")
        getDocs(misProductos)
            .then(res=>{
                const nuevosProductos = res.docs.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProductos(nuevosProductos)
            })
            .catch(error => console.log(error))
            .finally(()=>{
                
                setLoading(false)
            })
    }, [idCategoria])
    
    
    return(
        <>
        <h2 className="titleItemListContainer">Mis Productos</h2>
        <div className="container">
            <ItemList productos={productos} />
        </div>
        
        
        
        </>
    )
}

export default ItemListContainer