import { useState } from "react"
// import Caeg from "./new_categg"
import Categ from "./category"
import "./main.css"
function Categg(props){
    // const [gg ,setgg] = useState([props.valuess])
    // console.log("gg" , gg)
    console.log(props.valuess)
    return(
        <>
        {props.value.map(data=>
            // <>
            <div className="book-cat">
            <Categ key={data.id} newdata={data}/>
            </div>
            


            
        )}

        </>
    )

    
}
export default Categg