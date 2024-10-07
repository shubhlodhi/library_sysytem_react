import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css"
import { Link } from "react-router-dom";
import Singlepage from "./singlePoage";
import { useSelector } from "react-redux";

function Book_details(props){
    const [new_po  ,setNee] = useState([props.new_val ])
    const [desc ,set_desc] = useState(true)
    const bookss = useSelector((state)=> state.book)

function descp(){
     set_desc(!desc)

}
// console.log(book)
// setNee( book)
// setNee(props.new_val)
    

    
    
    return(
        <>
        {/* {book.map(data=> */}
            {/* // <h1>{data.name}</h1> */}
        {/* // )} */}
        
        

        
        {new_po.map(data=>
        <>
        <div class="card" style={{width: "30rem"}}>
        <div className="book-card" key={data.id}>
        {/* <h1>{data.id}</h1> */}
        <div className="card-body">
       <h3 className="card-title"> {data.title}</h3>
       <Link to={`book/${data.id}`}>
       {/* <Singlepage fulls={new_po} /> */}
       <button className="btn btn-primary">Go to Book</button>
       
       <>
       
       </></Link>

       
       
        <h6 className="card-title">{data.author}</h6>
        <p className="card-text">{(!desc) ? data.description : ""}</p>
        <img src={data.cover_image} style={{ width: "300px", height: "300px" }}></img>  
        <div className="button-sec">
        <button className="btn btn-danger" 
        style={{width:"200px" , height:"50px"}}>add to cart</button>
        <button className="btn btn-danger" onClick={descp}
         style={{width:"200px" , height:"50px"}}>{(!desc)?"hide" : "show" } desc</button>
         </div>
        
        </div>

        </div> 
        </div>
        
    </>
    )

        }
        </>
    )

}
export default Book_details