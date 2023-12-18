import Image from "next/image"
import "@/components/Producto_R.css"
import Button_Add from "@/components/Button_Add"

export default function Producto_R({titulo ,prop2}){
    return(
        <div>
        
            <h1 className={`m_auto`}>{titulo}</h1>
            <section className="productos_r">

                <div className="complete_contain">
                    <div className="top_white">
                        <Image src="/images/E80.png" width={180} height={180} alt="rack para tv"/>
                    </div>
                    <div className="bottom_black">
                        <div className="content_botom">
                            <h1>Producto</h1>
                            <h3>descripcion</h3>
                            <Button_Add />
                        </div>

                    </div>
                </div>

                <div className="complete_contain">
                    <div className="top_white">
                        <Image src="/images/Guirnalda.png" width={180} height={180} alt="guirnalda RGB"/>
                    </div>
                    <div className="bottom_black">
                        <div className="content_botom">
                            <h1>Producto</h1>
                            <h3>descripcion</h3>
                            <Button_Add />
                        </div>

                    </div>
                </div>

                <div className="complete_contain">
                    <div className="top_white">
                        <Image src="/images/TH-H4.jpg" width={180} height={180} alt="audifonos gamer"/>
                    </div>
                    <div className="bottom_black">
                        <div className="content_botom">
                            <h1>{prop2}</h1>
                            <h3>descripcion</h3>
                            <Button_Add />
                        </div>

                    </div>
                </div>

                <div className="complete_contain">
                    <div className="top_white">
                        <Image src="/images/Halo100.png" width={180} height={180} alt="parlante karaoke"/>
                    </div>
                    <div className="bottom_black">
                        <div className="content_botom">
                            <h1>Producto</h1>
                            <h3>descripcion</h3>
                            <Button_Add />
                        </div>

                    </div>
                </div>

                <div className="complete_contain">
                    <div className="top_white">
                        <Image src="/images/Ht-122.jpg" width={180} height={180} alt="parlante pc"/>
                    </div>
                    <div className="bottom_black">
                        <div className="content_botom">
                            <h1>Producto</h1>
                            <h3>descripcion</h3>
                            <Button_Add />
                        </div>
                    </div>
                </div>

                

                
                
                
                
                
            </section>
        </div>

    )


}