import { useState } from "react";

import CreateGame from "./components/CreateGame";
import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/WelcomeWorld";


function App() {
    const [page, setPage] = useState('/home');

    const naviagtionChangeHandler = (path) => {
        setPage(path);
    }

 

    const router = (path) => {
        let pathNames = path.split('/');

        let rootPath = pathNames[1];
        let argument = pathNames[2];

        const routes = {
            'home': <WelcomeWorld />,
            'games': <GameCatalog naviagtionChangeHandler={naviagtionChangeHandler} />,
            'create-game': <CreateGame />,
            'login': <Login />,
            'register': <Register />,
            'details': <GameDetails id={argument}/>
        };
        
        return routes[rootPath];
    };

  return (
    <div id="box">

        <Header 
            naviagtionChangeHandler={naviagtionChangeHandler}
        />

        <main id="main-content">
            { router(page) || <ErrorPage/> }
        </main>

    </div>
  );
}

export default App;
