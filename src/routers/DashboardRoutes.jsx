import { Routes, Route } from 'react-router-dom';
import { MoviesList } from '../components/movies/MoviesList';

import { NavBar } from '../components/movies/NavBar';
import { NewMovies } from '../components/movies/NewMovies';
import { TopMovies } from '../components/movies/TopMovies';


export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="destacados" element={<TopMovies />} />
                    <Route path="estrenos" element={<NewMovies />} />
                    <Route path="buscar" element={<MoviesList />} />
{/* 
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroeId" element={<HeroScreen />} /> */}

                    <Route path="*" element={<TopMovies />} />

                </Routes>
            </div>
        </>
    )
}
