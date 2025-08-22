import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold text-warning" to="/">
                        <i className="bi bi-fire me-1"></i> AnimeWear
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center">

                            {/* Home */}
                            <li className="nav-item mx-2">
                                <NavLink
                                    to="/"
                                    end
                                    className={({ isActive }) => `nav-link ${isActive ? "text-warning fw-bold" : ""}`}
                                >
                                    <i className="bi bi-house-door me-1"></i> Home
                                </NavLink>
                            </li>

                            {/* Catalog */}
                            <li className="nav-item mx-2">
                                <NavLink
                                    to="/catalog"
                                    className={({ isActive }) => `nav-link ${isActive ? "text-warning fw-bold" : ""}`}
                                >
                                    <i className="bi bi-bag me-1"></i> Catalog
                                </NavLink>
                            </li>

                            {/* 🎨 Designs (restored) */}
                            <li className="nav-item mx-2">
                                <NavLink
                                    to="/designs"
                                    className={({ isActive }) => `nav-link ${isActive ? "text-warning fw-bold" : ""}`}
                                >
                                    <i className="bi bi-palette me-1"></i> Designs
                                </NavLink>
                            </li>

                            {/* Cart */}
                            <li className="nav-item mx-2">
                                <NavLink
                                    to="/cart"
                                    className={({ isActive }) => `nav-link ${isActive ? "text-warning fw-bold" : ""}`}
                                >
                                    <i className="bi bi-cart me-1"></i> Cart
                                </NavLink>
                            </li>

                            {/* Sign In */}
                            <li className="nav-item mx-2">
                                <NavLink
                                    to="/signin"
                                    className={({ isActive }) =>
                                        `btn btn-outline-light btn-sm ${isActive ? "border-warning text-warning" : ""}`
                                    }
                                >
                                    <i className="bi bi-box-arrow-in-right me-1"></i> Sign In
                                </NavLink>
                            </li>

                            {/* Sign Up */}
                            <li className="nav-item mx-2">
                                <NavLink
                                    to="/signup"
                                    className={({ isActive }) =>
                                        `btn btn-warning btn-sm ${isActive ? "fw-bold shadow" : ""}`
                                    }
                                >
                                    <i className="bi bi-person-plus me-1"></i> Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Page Content */}
            <Outlet />
        </div>
    );
}

export default MainLayout;
