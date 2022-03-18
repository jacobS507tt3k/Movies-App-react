import { useState, useEffect } from 'react';
import { getMoviesInfo, getMoviesSearch } from '../../helpers/getMoviesAPI';



export const useFetchMoviesInfo=(val)=>{
    const [state, setState] = useState({
        results: [],
        loading: true,
    });
    
    useEffect(()=>{
      getMoviesInfo(val)
      .then((datos)=>{
            setState({
                results: datos,
                loading: false,
            });
  
          
      })
    }, []) 

   
    return state;//{data: [], loading: true}
}


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