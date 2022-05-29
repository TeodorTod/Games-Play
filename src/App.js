import { useState } from "react";

import CreateGame from "./components/CreateGame";
import GameCatalog from "./components/GameCatalog";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";


function App() {
    const [page, setPage] = useState('/home');
    const routes = {
        '/home': <WelcomeWorld />,
        '/games': <GameCatalog />,
        '/create-game': <CreateGame />
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
            { routes[page] || <h1>No Page Found!</h1> }
        </main>

    </div>
  );
}

export default App;
