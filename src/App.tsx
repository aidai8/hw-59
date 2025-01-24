import './App.css'
import MovieList from "./container/MovieList/MovieList.tsx";
import Jokes from "./container/Jokes/Jokes.tsx";

const App = () => (
    <>
        <div className="container mt-4">
            <MovieList/>
            <hr/>
            <Jokes></Jokes>
        </div>
    </>
);

export default App