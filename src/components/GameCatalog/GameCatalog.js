import { useEffect, useState, lazy, Suspense } from "react";
// import GameCard from "./GameCard";
import * as gameService from '../../services/gameService';
const GameCard = lazy(() => import('./GameCard'));

const GameCatalog = ({
    naviagtionChangeHandler
}) => {
const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result);
           
        });
    }, []);

    return (
        <section id="catalog-page">
        <h1>All Games</h1>
        <Suspense fallback={<p>Loading...</p>}>
            { games.length > 0 
                ? games.map(x => <GameCard key={x._id} game={x} naviagtionChangeHandler={naviagtionChangeHandler}/>)
                :    <h3 className="no-articles">No games yet</h3>
            }
        </Suspense>

    </section>
)

}

export default GameCatalog;