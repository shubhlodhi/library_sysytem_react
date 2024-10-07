import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    { name:"new_book" , desc:"dkjfdfsfdfjdjdlkfjlooekd.wmd" , author:"shubh" , release:"20,Nov,2023"}
    
]
const slice = createSlice(
    {
        name:"sliceone" ,
        initialState,
        // items:["books"]
        // },
            
        
        reducers :{
            addItem : (state, action)=>{
                state.push(action.payload)

            }
        }
    }
)
export const { addItem } = slice.actions
export default slice.reducer