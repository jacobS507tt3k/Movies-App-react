import { Routes, Route } from 'react-router-dom';
import { SimpleMap,  } from '../components/maps/mapaScreen';
import { MovieDetails } from '../components/movies/MovieDetails';
import { MoviesList } from '../components/movies/MoviesList';

import { NavBar } from '../components/movies/NavBar';
import { NewMovies } from '../components/movies/NewMovies';
import { TopMovies } from '../components/movies/TopMovies';


export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <div className="card_space animate__animated animate__zoomIn">
            <div className="container mt-4">
                <Routes>
                    <Route path="destacados" element={<TopMovies />} />
                    <Route path="estrenos" element={<NewMovies />} />
                    <Route path="buscar" element={<MoviesList />} />
                    <Route path="mapa" element={<SimpleMap />} />
                    
                    <Route path="details" element={<MovieDetails />} />
{/* 
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} /> */}

                    <Route path="*" element={<TopMovies />} />

                </Routes>
            </div>
            </div>
        </>
    )
}
