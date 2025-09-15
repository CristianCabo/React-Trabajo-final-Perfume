import Item from "../Item/Item"
import "./ItemList.css"

const ItemList=({productos, id})=>{

    return(
        
        <div key={id} className="contenedorProductos">
            {productos.map(item=> <Item {...item}></Item>)}
        </div>
        
    )
}

export default ItemList