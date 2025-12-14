
import React from "react";
import Cart from "./component/Cart";
import ing1 from "./Img/Model 2.jpg"
import ing2 from "./Img/Model 1.jpg"


function APP(){
return(

  <div className="flex"> 

    <Cart name = 'Pranto' University = 'IUBAT' img = {ing1}/>
    <Cart name = 'Santo' University = 'BUBT' img = {ing2}/>

  </div>

)
}
export default APP;
