import { useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./main.css"

function Categ(props) {
    const [new_data, set_new] = useState([props.newdata])
    const url = useParams()
    console.log(url.genre)
    console.log("sh", new_data)
    // const h = []
    const gg = (new_data.filter(data=>data.genre[0] === url.genre))
    console.log("gg",gg)
    // console.log("ghu" , ghu)
    return (
        <>
            {/* <h1>category</h1> */}
            {/* {new.id} */}
            {/* <h1>{ghu.title}</h1> */}
            {/* {h.map(data=> */}
                {/* <h1>{data.title}</h1> */}
            {/* )} */}
            {gg.map(data=>
                // <h1> data{data.title}</h1>
                <>
<div className="fin-card">
<div class="card" style={{width: "18rem"}}>
  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
  <img src={data.cover_image} alt="cart image cap" className="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{data.title}</h5>
    <p class="card-text">{data.description}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    <Link to={`/book/${data.id}`}>
       {/* <Singlepage fulls={new_po} /> */}
       <p className="btn btn-primary">Full Book</p>
       
       <>
       
       </></Link>
  </div>
</div>    
                
</div>
        {/* </div>  */}

                </>
            )}
        </>
    )
}
export default Categ