import {useState, useEffect} from "react";

const Jokes = () => {
    const [joke, setJoke] = useState<string>("");

    useEffect(() => {
        fetchJoke();
    }, []);

    const fetchJoke = async () => {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();
            setJoke(data.value);
    };

    return (
        <div className="container text-center">
            <h2 className="m-4">Joke</h2>
            <p className="bg-warning">{joke}</p>
            <button className="btn btn-primary mt-3" onClick={fetchJoke}>
                New Joke
            </button>
        </div>
    );
};

export default Jokes;