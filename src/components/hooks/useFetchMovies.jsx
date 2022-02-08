import { useState, useEffect } from 'react';
import { getMovies } from '../../helpers/getMovies';



export const useFetchMovies=()=>{
    const [state, setState] = useState({
        results: [],
        loading: true,
    });

    useEffect(()=>{
      getMovies()
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