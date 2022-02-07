import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { MoviesScreen } from "../components/movies/MoviesScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (<div>

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MoviesScreen />}/>
            <Route path="/auth/*" element={<AuthRouter />}/>
            <Route path="*" element={<Navigate to="/" />}/>


        </Routes>
    
    </BrowserRouter>
      
  </div>);
};
