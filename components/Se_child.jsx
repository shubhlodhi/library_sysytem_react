import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



import "./main.css"
function Se_child(props){
    const [arr1  ,setarr] = useState([props.new_data])
    const urls = useParams()
    console.log(urls.id)
    const g  = arr1.filter(data=>data.id == urls.id)

    return(
        <>
        {g.map(data=>
        <>
        <div className="card">
            {/* <h1>{data.id}</h1> */}
            <h1>Name of Book :</h1><h2>{data.title}</h2>
            {/* <p></p> */}
            <br />
            <h1> Description :</h1><h3>{data.description}</h3>
            <br />
            <h1> Category : </h1><h4> {data.genre[0]}</h4>
            <br>
            </br>
            <h1>Release :</h1><h4>{data.publication_year}</h4>
            <br>
            </br>
            <h1>Author :</h1><h5>{data.author}</h5>
            <br>
            </br>
            <img src={data.cover_image} style={{ width: "300px", height: "300px" }}></img>  
            <br>
            </br>
            <div className="button-sec">
            <button className="btn btn-danger" style={{width:"200px" , height:"50px"}}>Add to cart</button>
            <br>
            </br>
            <Link to={"/"}>
            <button className="btn btn-danger" style={{width:"200px" , height:"50px"}}>Back to Home</button>
            </Link>
            </div>


            </div>
            
            {/* <h1>{data.title}</h1> */}
            
            </>
        )}

        </>
    )

}
export  default Se_child