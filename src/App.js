import { useState } from "react";

import CreateGame from "./components/CreateGame";
import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/WelcomeWorld";


function App() {
    const [page, setPage] = useState('/home');
    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <GameCatalog />,
        '/create-game': <CreateGame />,
        '/login': <Login />,
        '/register': <Register />
    };

    const naviagtionChangeHandler = (path) => {
        setPage(path);
    }

  return (
    <div id="box">

        <Header 
            naviagtionChangeHandler={naviagtionChangeHandler}
        />

        <main id="main-content">
            { routes[page] || <ErrorPage/> }
        </main>

    </div>
  );
}

export default App;
