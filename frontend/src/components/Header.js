import { Link } from "react-router-dom";
import Search from "./Search";
import { useAuth } from "../context/AuthContext";

export default function Header({cartItems}) {
    const { currentUser, logout } = useAuth();

    async function handleLogout() {
        try {
            await logout();
        } catch(error) {
            console.error("Failed to log out", error);
        }
    }

    return <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                <Link to="/"> <img width="150px" src="/images/logo.png" alt="Logo" /></Link>
                </div>
            </div>

            <div className="col-12 col-md-5 mt-2 mt-md-0">
              <Search/>
            </div>

            <div className="col-12 col-md-4 mt-4 mt-md-0 text-center d-flex align-items-center justify-content-end pr-5">
                {currentUser ? (
                    <button onClick={handleLogout} className="btn btn-danger mr-4">Logout</button>
                ) : (
                    <Link to="/login" className="btn btn-primary mr-4" id="login_btn">Login</Link>
                )}
                
                <Link to={"/cart"}>
                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>
            </div>
        </nav>
}