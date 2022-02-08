import { useState, useEffect } from 'react';
import { getMovies } from '../../helpers/getMovies';



export const useFetchMovies=(val)=>{
    const [state, setState] = useState({
        results: [],
        loading: true,
    });
    
    useEffect(()=>{
      getMovies(val)
      .then((datos)=>{
            console.log(datos);
            setState({
                results: datos,
                loading: false,
            });
  
          
      })
    }, []) 

   
    return state;//{data: [], loading: true}
}