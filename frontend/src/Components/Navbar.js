import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Biblioteka</h1>
            <div className="links">
            <Link to="/">Pagrindinis puslapis</Link>
            <Link to="/create">Nauja knyga</Link>
            </div>
        </nav>
    );
}

export default Navbar;