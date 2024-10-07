import Se_child from "./Se_child"
function S_child(props){

return(
    <>
    {/* <h1>Single_child</h1> */}
    {props.new_arr.map(data=> <Se_child new_data={data}/>)}
    


    </>
)
}

export default S_child