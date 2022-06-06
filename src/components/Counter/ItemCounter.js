import "./itemCounter.scss"
import { useState } from "react";


export const ItemCounter = ({stock}) =>{
    let [contador, setContador] = useState(1)


    const incrementar = () =>{

        stock > contador? setContador(contador+1) : setContador(contador)
    }

    const decrementar = () =>{

        contador > 0? setContador(contador-1) : setContador(contador)
    }

    const resetear = () =>{

        setContador(0)
    }




    return(
        <div className="container border w-25 agregarPedido" >
            <div>
                <h2 className="producto">Remera roja</h2>
                <hr/>
                <button className="btn btn-primary m-2 agregarPedido p-4" onClick={incrementar}>+</button>
                <span className="p-5">{contador}</span>
                <button className="btn btn-primary m-2 agregarPedido p-4" onClick={decrementar}>-</button>
            </div>
            <button className="btn btn-primary p-5 m-2 w-75 fs-4" onClick={resetear}>Agregar al carrito</button>
        </div>
    )
}