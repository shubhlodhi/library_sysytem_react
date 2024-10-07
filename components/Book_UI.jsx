import { useState ,useEffect } from "react"
import Books_api from "./Books_api"
import "./main.css"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import "./main.css"
function Book(){
    const [val , setval ] = useState([])
    const [value , set_values] = useState("")
    const bookss = useSelector((state)=>state.book)
    console.log("new" , bookss)
    useEffect(() => {
        async function getBooks() {
          const res = await fetch("https://freetestapi.com/api/v1/books");
          const data = await res.json();
          setval(data);
        //   setval(bookss)
        }
    
        getBooks();
      }, []);
    // setval(...val ,bookss)
        
    function Search(){
        
        const filter_value = val.filter((dat) =>
        dat.title.toLowerCase().includes(value.toLowerCase()))
        setval(filter_value)
        console.log(filter_value)


    }
        

    
    return(
        <>
        
        
        <div className="search-form">
            <input type="text" className="form-control" 
            onChange={(e)=>set_values(e.target.value)} placeholder="Search Books here" />
            <button className="btn btn-success m-2" onClick={Search}>Search</button>
        </div>
        {/* <h4>NEw bbok</h4> */}
        <h1 className="main-title">Book</h1>
        {/* {val.map((data)=>  */}
        
            {< Books_api index_arr={val}/>}
        
            <h1 style={{display:"flex" , justifyContent:"center" ,alignItems:"center"}}>New books </h1>

        <div className="add_book">
        {bookss.map(data=>
        // <> 
        <>
        <div className="book-card" key={data.id}>
        {/* <h1>{data.id}</h1> */}
       <p> {data.name}</p>
       <Link to={`book/${data.id}`}>
       {/* <Singlepage fulls={new_po} /> */}
       <p>click here...</p>
       
       {/* <> */}
       
       </Link>

       
       
        <h6>{data.author}</h6>
        {/* <p>{(!desc) ? data.description : ""}</p> */}
        <p>{data.desc}</p>
        <h4>{data.release}</h4>

        {/* <img src={data.cover_image} style={{ width: "300px", height: "300px" }}></img>   */}
        <div className="button-sec">
        <button className="btn btn-danger" 
        style={{width:"200px" , height:"50px"}}>add to cart</button>
        <button className="btn btn-danger" 
         style={{width:"200px" , height:"50px"}}> desc</button>
        
        </div>

        </div> 
        
    </>
         )}
        </div>
        </>
    )
}
export default Book