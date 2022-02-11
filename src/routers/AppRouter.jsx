import firebase from "firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { login } from "../actions/auth";
import { AuthScreen } from "../components/auth/AuthScreen";
import { MDBSpinner } from 'mdb-react-ui-kit';

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setCheking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [token, setToken] = useState("")

  useEffect(() => {
      firebase.auth().onAuthStateChanged( async (user) => {
          if(user?.uid){
              user.getIdTokenResult().then((token)=>{
                setToken(token);
              })
              
              dispatch(login(user.uid, user.displayName));
              setIsLoggedIn(true);

          }else{
              setIsLoggedIn(false);
          }

          setCheking(false);


    });
  }, [dispatch, setCheking, setIsLoggedIn]);

  if(checking){
      return (
        <div className='d-flex align-items-center'>
      <strong>Cargando...</strong>
      <MDBSpinner className='ms-auto ' role='status' style={{ width: '4rem', height: '4rem' }} />
    </div>
      );
  }


  return (<div>

    <BrowserRouter>
        <Routes>


        <Route path="/login" element={
            <PublicRoute isAuth={isLoggedIn}>
            <AuthScreen />
            </PublicRoute>}/>

            <Route path="/*" element={
            <PrivateRoute isAuth={isLoggedIn}>
            <DashboardRoutes />
            </PrivateRoute>
            }/>

        
            
            <Route path="*" element={<Navigate to="/" />}/>


        </Routes>
    
    </BrowserRouter>
      
  </div>);
};
