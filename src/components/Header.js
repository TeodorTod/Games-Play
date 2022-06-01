import { Link, NavLink } from "react-router-dom";

const Header = () => {
    let activeLinkStyles = {
        backgroundColor: 'blue',
        textDecoration: 'underline'
    };


    return (
        <header>
        <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
        <nav>
            <NavLink activeStyle={activeLinkStyles} to="/games">All games</NavLink>
            <div id="user">
                <NavLink activeStyle={activeLinkStyles} to="/create-game">Create Game</NavLink>
                <NavLink activeStyle={activeLinkStyles} to="/logout">Logout</NavLink>
            </div>
            <div id="guest">
                <NavLink activeStyle={activeLinkStyles} to="/login">Login</NavLink>
                <NavLink activeStyle={activeLinkStyles} to="/register">Register</NavLink>
            </div>
        </nav>
    </header>
    );

}

export default Header;