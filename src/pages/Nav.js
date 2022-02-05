import { Link, Outlet } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <div class="container">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <Link to="/" class="nav-link text-dark">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/trash" class="nav-link text-dark">Trash</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;