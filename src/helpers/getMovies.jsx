export const getMovies = async ({val}) => {

  /*   const urlBase = "https://api.themoviedb.org/3"
    const api_key ="ab4fa6c567cff55f31d06f6ad9fb0ed4"

  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

    

    const getData = (url) => {

        fetch(url).then(resp=>resp.json()).then(data => {
            console.log(data);
        })
    }

    getData(url);

  return getData;  */

  const urlBase = "https://api.themoviedb.org/3"
  const api_key ="ab4fa6c567cff55f31d06f6ad9fb0ed4"
  const topMovies = "/movie/popular"
  const upComing = "/movie/upcoming"
    const imagePoster="https://image.tmdb.org/t/p/w500";
  const url = `https://api.themoviedb.org/3${val}?api_key=${api_key}&language=es-ES&page=1`;
    const resp = await fetch(url);
    const {results} = await resp.json();

    const valores = results.map((data)=>{
        return{
          title: data.title,
          overview: data.overview,
          image: data.poster_path,
          id: data.id,
          release_date: data.release_date,
          votes: data.vote_average, 
          genero: data.genre_ids,
          
        }
    })

  

    
    
    return valores;

};
