import { Link, Outlet } from "react-router-dom";
import Nav from "./Nav.js";

function Layout(){
    return (
        <>
            <Nav/>
            <Outlet />
        </>
    );
}

export default Layout;