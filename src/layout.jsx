import React  from "react";
import AppNavbar from './navbar';
import { Outlet } from "react-router-dom";

function Layout(){
 

    return (
        <div>
            <AppNavbar />
            <Outlet />
        </div>
    );

}

export default Layout;