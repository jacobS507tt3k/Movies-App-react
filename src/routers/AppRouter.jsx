import firebase from "firebase";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { login } from "../actions/auth";
import { AuthScreen } from "../components/auth/AuthScreen";

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setCheking] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
      firebase.auth().onAuthStateChanged( async (user) => {
          if(user?.uid){
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
          <h1>Please wait...</h1>
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
