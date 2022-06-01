import { Link as navLink, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <h1><navLink className="home" to="/">GamesPlay</navLink></h1>
        <nav>
            <navLink to="/games">All games</navLink>
            <div id="user">
                <navLink to="/create-game">Create Game</navLink>
                <navLink to="/logout">Logout</navLink>
            </div>
            <div id="guest">
                <navLink to="/login">Login</navLink>
                <navLink to="/register">Register</navLink>
            </div>
        </nav>
    </header>
    );

}

export default Header;