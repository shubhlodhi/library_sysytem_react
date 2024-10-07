import { useState  ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { data } from "./mock";
import S_child from "./singl_children";
// 
// console.log(Paths)

function Singlepage(){
    const Paths  = useParams()
    // const [datess , setcount] = useState([full])
    const [ji ,setji] = useState([

    ])
    useEffect(()=>{
        async function feh() {
            const data = await  fetch("https://freetestapi.com/api/v1/books")
            const res = await data.json()
            setji(res)
        

            
        }
        feh()
    } ,[])   

    // const g = ji.filter(data => data.id == Paths.id)
    // console.log("jijij" , g)
    // console.log("89",props.new_val_1)
    // setcount(full)

    // console.log(Paths.id)
    return(
        <>
        
        {/* <h1>page new for category</h1> */}
        <S_child new_arr={ji}/>

        {/* <h1>heloo</h1> */}

        
        
                       
        </>
    )

}
export  default Singlepage

