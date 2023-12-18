import { Quicksand } from "next/font/google"
import Image from "next/image"
import "./page.css"
import AgregarCarrito from "@/components/AgregarCarrito"
import Slider from "@/components/Slider"
let variable = 1
let variableprecio = 1500
 
export const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '400'
})

const Talla = () =>{
    return(
        <section className={`${quicksand.className} tl`}>
            <h1>tallas:</h1>
            <ul className="tx">
                <button>S</button>
                <button>M</button>
                <button>L</button>
            </ul>
        </section>
    )
}

const Cantidad = () =>{
    return(
        <section className={`${quicksand.className} cx`}>
            <h1>cantidad </h1>
            <div className="cantidad">
                <button>-</button>
                <p>1</p>
                <button>+</button>
            </div>
        </section>
    )
}


export default function Principal(){
    return(
        <div className="div_principal">
        <section className="img_test">
            <Slider />
          {/*<Image src="/images/bannerprueba.png" width={850} height={450} className="test_img"/>*/} 
        </section>
        <section className={`${quicksand.className} section_right`}>
            <h1>NOMBRE DEL PRODUCTO</h1>
            <h3>Stock : {variable}</h3>
            <p>descripcion del producto</p>
            <Talla></Talla>
            <Cantidad/>
            <h1>precio</h1>
            <p>s/{variableprecio}</p>
            <AgregarCarrito/>
        </section>
    </div>
    )   
}