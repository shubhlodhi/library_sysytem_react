import { useState } from "react"
import {useDispatch} from "react-redux"
import { addItem } from "./slice"
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

function Addpage(){
    const [count , setcount] = useState({
        name:"",
        desc:"",
        author:"",
        release:"",

    })
    const dispatch = useDispatch()
    const navi = useNavigate()
    const handle_chnage = (e)=>{
         setcount({...count , 
            [e.target.name] : e.target.value ,
            

        })
        localStorage.setItem("additms" , JSON.stringify(...count))
        
    }
    const handle = (e) => {
        e.preventDefault();
        dispatch(addItem({...count 
            

        }))
        navi("/")
    }
    // function handle(){
console.log(count)
    // }

    return (
        <>
        {/* <h1>add page</h1> */}
        <form onSubmit={handle}>
            <br />
            <div>
            <label ><h1>Title of Book</h1></label>
            <br />

            <input type="text" name="name" className="form-control" 
            value={count.name} 
            onChange={handle_chnage} />
            </div>
            <br />
            <div>

                <label htmlFor=""><h1>Description</h1></label>
                <br />
                <input required type="text" name="desc" className="form-control" value={count.desc} onChange={handle_chnage} />
            </div>
            <br />
            <div>
                <label htmlFor=""><h1>Author</h1></label>
                <br />
                <input required type="text" name="author" className="form-control" value={count.author} onChange={handle_chnage} />
            </div>
            <br />
            <div>
                <label htmlFor=""><h1>Published date</h1></label>
                <br />
                <input required type="text" name="release" className="form-control" value={count.release} onChange={handle_chnage} />
            </div>
            <br />
            <div>
                <label htmlFor=""><h1>Upload Image</h1></label>
                <input required type="file" name="release" className="form-control" value={count.release} onChange={handle_chnage} />
            </div>
           



            <button type="submit"className="btn btn-danger" >Add Book</button>
        </form>



        </>
    )
}
export default Addpage