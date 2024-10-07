import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Categg from "./catego_headre_1"

function Catego_header(){
    const [value , set_values] = useState([])
    useEffect(()=>{
        async function shubh() {
            const res = await fetch("https://freetestapi.com/api/v1/books");
          const data = await res.json();
          set_values(data);
        //   setval(bookss)
        // }
    
        // shubh();
        }
        shubh()

    } ,[])

    return (
        <>
        <div className="book-mai">
        <Categg value={value}/>
        </div>
               
        </>
    )
}
export default Catego_header