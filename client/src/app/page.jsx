import Principal from "./Principal/page"
import Producto_R from "@/components/Producto_R"

export default function Page(){
  return (
    <>
    <Principal/>
         <Producto_R titulo="PRODUCTOS RECOMENDADOS"  prop2 = "audifono"/>
    </>
  )
}