import React from "react";
import { HomeScreen } from "./HomeScreen";
import { NavBar } from "./NavBar";


export const MoviesScreen = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div>
        <HomeScreen/>
      </div>
    </>
  );
};
