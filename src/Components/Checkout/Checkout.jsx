import { useContext, useState } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../Services/config"
import { collection, addDoc } from "firebase/firestore"
import "../Checkout/Checkout.css"


const Checkout =()=> {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfimacion, setEmailConfirmacion] = useState("")
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")

    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext)

    //Funciones y Validaciones

    const manejadorFormulario = (event) => {
        event.preventDefault();


        // Verificamos que los campos esten completos
        if(!nombre || !apellido || !telefono || !email || !emailConfimacion){
            setError("Por Favor Completa todos los campos necesarios")
            return
        }
        //Verificamos que los emails coincidan
        if(email !== emailConfimacion){
            setError("Los campos de Email no coniciden")
            return

        }
        //Creamos un objeto con todos los datos de la orden
        const orden = {
            items: carrito.map(producto =>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //Guardado de la Orden en la Base de Datos

        addDoc(collection(db, "ordenes"), orden)
        .then(docRef =>{
            setOrdenId(docRef.id)
            vaciarCarrito()
        })
        .catch(error => {
            
            setError("Se produjo un error al crear la orden")
        })
    }

    return(

        <div className="checkoutContainer">
            <h2 className="checkoutTitle">CheckOut</h2>
            <form onSubmit={manejadorFormulario}>
                <div className="labelContainer">
                    <label htmlFor="" >Nombre </label>
                    <input type="text" placeholder="Cristian" onChange={(e)=> setNombre(e.target.value)} />
                </div>
                <div className="labelContainer">
                    <label htmlFor="" >Apellido</label>
                    <input type="text" placeholder="Cabo" onChange={(e)=> setApellido(e.target.value)}/>
                </div>
                <div className="labelContainer">
                    <label htmlFor="" >Telefono</label>
                    <input type="text" placeholder="1234567889" onChange={(e)=> setTelefono(e.target.value)}/>
                </div>
                <div className="labelContainer">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="cris@gmail.com" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div className="labelContainer">
                    <label htmlFor="">Email Confirmacion</label>
                    <input type="email" placeholder="cris@gmail.com" onChange={(e)=> setEmailConfirmacion(e.target.value)}/>
                </div>

                {
                    error && <p style={{color: "red"}}>{error}</p>
                }
                <button type="submit" className="buttonConfirmacionCompra"> Confirmar Compra</button>
                <br />

                
                {
                    ordenId && (<strong className="confimacionCompra"> Gracias por tu compra!. Tu numero ded Orden es : {ordenId}</strong>)
                    
                }
               
            </form>
        </div>
    )
}

export default Checkout