import {Routes, Route, Navigate} from "react-router-dom"
import { LoginScreen } from "../components/auth/LoginScreen";
export const AuthRouter = () => {
  return (<div>

  
        <Routes>
            <Route path="login" element={<LoginScreen />}/>
           
            <Route path="*" element={<Navigate to="/" />}/>


        </Routes>
    
    
      
  </div>);
};
