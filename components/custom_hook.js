import { useState ,useEffect } from "react";
function Custom(url){
    const [data ,setdata] = useState("")
    const [err , seterr] = useState()
    const [loading , setloading] = useState(true)
    
    useEffect(()=>{
        async function fetching() {
            
        
        const res =  await fetch(url)
        const data = await res.json()
        setdata(data)

    }    
    
    try{
    if (data){
        setdata(data)

    } }
    catch{
    if (err){
        seterr(err)
    }
    }
    finally{
        console.log("loading" ,loading)

    }
    fetching()
     
     

},[url])
return {data , err,  loading}

}