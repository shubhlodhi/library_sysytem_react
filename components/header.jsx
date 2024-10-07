import "./main.css"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'
// import Catego_header from "./ctaego_header"
import Caeg from "./new_categg"
function Header(){
    return(
        <>
        <header className="headers">
        <nav class="navbar navbar-expand-lg navbar-light bg-light " style={{width:"1000px"}}>
    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <Link to={"/"}><li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"
        ></span></a>
        </li></Link> 
       <Link to={"/contact"}><li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li></Link> 
       <Link to={"/about"}><li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li></Link> 
        <Link to={"/addpage"}><li class="nav-item">
          <a class="nav-link disabled" href="#">Add page</a>
        </li></Link>
      </ul>
    </div>
  </nav>

           
            {/* </div> */}
        </header>

        <Caeg/>
        </>
        
    )
}
export default Header