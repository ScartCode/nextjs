"use client"
import "@/components/AgregarCarrito.css"
export default function AgregarCarrito(){
  return (
    <button onClick={()=>{
      alert("producto agregado")
    }} className="button_add">Agregar carrito</button>
  )
}