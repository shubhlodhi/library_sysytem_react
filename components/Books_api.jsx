import { useState } from "react"
import Book_details from "./books_details"
// import Singlepage from "./singlePoage"
// import BrowserRouter as Router, Route, Routes
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Books_api(props) {
    // const [val1 , set_val_1] = useState([])

    console.log( "Boks" , props.index_arr)
    // set_val_1(props.index_arr)
    return (
        <>
        
        <div className="api-card">
            {props.index_arr.map(data => 
                //  <h1>{data.title}</h1> 
                <>
                <Book_details key={data.id} new_val={data} />
                {/* <Singlepage  key={data.id} new_val_1={data}/> */}

                </>
                
            )
            }
            {/* {props.index_arr.title} */}
            </div>
        </>
    )
}
export default Books_api
