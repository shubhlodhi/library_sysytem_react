import { useState } from "react"
import { Link, useParams } from "react-router-dom"

function Caeg(){
    // const [newdata , set_new_data] = useState([props.newdata])
   

    // )
    // console.log("ss",newdata)

    return (
        <>
        {/* {newdata.map(data =>  */}
            <>
            {/* {data.genre[0]} */}
            {/* <header className="headers" style={{margin:"20px"}}> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <span> <h4>Category : </h4></span>
        <Link to={"/catego/Fiction"}><a  style={{marginLeft:"150px"}} className="nav-item nav-link active"
         href="#">Fiction <span class="sr-only"></span></a></Link>
        <Link to={"/catego/Classic"}>
        <a className="nav-item nav-link" style={{marginLeft:"150px"}} href="#">Classic</a></Link>
        <Link to={"/catego/Epic"}><a
         className="nav-item nav-link" style={{marginLeft:"150px"}} href="#">Epic</a></Link>
       <Link to={"/catego/Horror"}>
        <a className="nav-item nav-link " style={{marginLeft:"150px"}} href="#">Horror</a></Link>
       <Link to={"/catego/Adventure"}>
        <a className="nav-item nav-link " style={{marginLeft:"150px"}} href="#">Adventure</a></Link>
        <Link to={"/catego/Dystopian"}>
        <a className="nav-item nav-link " style={{marginLeft:"150px"}} href="#">Dystopian</a></Link>
        <Link to={"/catego/Gothic"}>
        <a className="nav-item nav-link " style={{marginLeft:"150px"}} href="#">Gothic</a></Link>
        <Link to={"/catego/Science Fiction"}>
        <a className="nav-item nav-link " style={{marginLeft:"150px"}} href="#">Science Fiction</a></Link>
        <Link to={"/catego/Historical"}>
        <a className="nav-item nav-link " style={{marginLeft:"150px"}} href="#">Historical</a></Link>
        <Link to={"/catego/Fantasy"}>
        <a className="nav-item nav-link " style={{marginLeft:"150px"}} href="#">Fantasy</a></Link>






      </div>
    </div>
  </nav>

        {/* </header> */}
            </>
        {/* )} */}


        </>
    )
}
export default Caeg