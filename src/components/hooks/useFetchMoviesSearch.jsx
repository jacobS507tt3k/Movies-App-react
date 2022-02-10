import { useState, useEffect } from 'react';
import { getMoviesSearch } from '../../helpers/getMoviesSearch';



export const useFetchMoviesSearch=(val)=>{
    const [state, setState] = useState({
        results: [],
        loading: true,
    });
    
    useEffect(()=>{
      getMoviesSearch(val)
      .then((datos)=>{
            setState({
                results: datos,
                loading: false,
            });
  
          
      })
    }, []) 

   
    return state;//{data: [], loading: true}
}