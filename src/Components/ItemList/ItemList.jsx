import Item from "../Item/Item"
import "./ItemList.css"

const ItemList=({productos, id})=>{

    return(
        
        <div key={id} className="contenedorProductos">
            {productos.map(item=> <Item key={item.id} {...item}></Item>)}
        </div>
        
    )
}

export default ItemList