import React from 'react';
import AppRouter from "./router/AppRouter";
import NavBar from "./components/NavBar/NavBar";

const AppWithRouter = () => {
    return (
        <div>
            <NavBar/>
            <AppRouter/>
        </div>
    );
};

export default AppWithRouter;