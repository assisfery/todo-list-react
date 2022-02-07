import { Link, Outlet } from "react-router-dom";

function Nav(){
    return (
        <nav>
            <div className="container">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link to="/" className="nav-link text-dark">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/trash" className="nav-link text-dark">
                            <i className="fas fa-trash"></i>
                            <span className="mx-2">
                                Trash
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;