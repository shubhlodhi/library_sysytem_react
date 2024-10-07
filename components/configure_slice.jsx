import {configureStore} from "@reduxjs/toolkit"
import sliceoneReducer from "./slice.js"

export const Slice_main = configureStore(
    {
        reducer:{
            book:sliceoneReducer
        }
    }
)

export default Slice_main