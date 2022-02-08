import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import { AuthRouter } from "./AuthRouter";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (<div>

    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<DashboardRoutes />}/>
            <Route path="/auth/*" element={<AuthRouter />}/>
            <Route path="*" element={<Navigate to="/" />}/>


        </Routes>
    
    </BrowserRouter>
      
  </div>);
};
