import React, {useState} from "react";

export interface Props  {
    onAddMovie: (title: string) => void;
}

const MovieForm: React.FC<Props> = ({onAddMovie}) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAddMovie(title);
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="input-group">
            <input
                type="text"
                className="form-control"
                placeholder="Enter movie name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    );
};

export default MovieForm;