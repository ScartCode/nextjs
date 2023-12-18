import Principal from "./Principal/page"
import Navbar from "@/components/Navbar"
import Producto_R from "@/components/Producto_R"
import "@/app/layout.css"
export default function RootLayout({children}) {
  return (
    <html lang='es'>
      <body>
         <Navbar prop ="Productos" ></Navbar>
         
         <div >{children}</div>


      </body>
    </html>

   
  )
}
