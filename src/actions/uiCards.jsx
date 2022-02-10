import { types } from "../types/types"

export const buscarMovie = (buscar)=>{
     
       return (dispatch)=>{
            
            dispatch(searchMovie(buscar))
       } 
}

 export const searchMovie = (buscar)=> ({
    type: types.searchMovie,
    payload: {
         buscar
    }

})


