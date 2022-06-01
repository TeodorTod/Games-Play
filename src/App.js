import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import CreateGame from "./components/CreateGame";
import ErrorPage from "./components/ErrorPage";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import GameDetails from "./components/GameDetails";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import WelcomeWorld from "./components/WelcomeWorld";


function App() {

  return (
    <div id="box">

        <Header />

        <main id="main-content">
            <Switch>
                <Route path="/" exact component={WelcomeWorld} />
                <Route path="/games" component={GameCatalog} />
                <Route path="/create-game" component={CreateGame} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/games/:gameId" component={GameDetails} />
            </Switch>
        </main>

    </div>
  );
}

export default App;
