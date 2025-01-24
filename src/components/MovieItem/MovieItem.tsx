import React, {useState} from "react";
import {Movie} from "../../types";

export interface Props {
    movie: Movie;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

const MovieItem: React.FC<Props> = React.memo(({movie, onDelete, onEdit}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(movie.title);

    const handleEditMovie = () => {
        setIsEditing(true);
    };

    const handleSaveChanges = () => {
        if (newTitle.trim() !== "") {
            onEdit(movie.id, newTitle);
            setIsEditing(false);
        }
    };

    const handleDeleteMovie = () => {
        onDelete(movie.id);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(event.target.value);
    };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {isEditing ? (
                <input
                    type="text"
                    className="form-control me-2"
                    value={newTitle}
                    onChange={handleInputChange}
                />
            ) : (
                <span>{movie.title}</span>
            )}
            <div>
                {isEditing ? (
                    <button className="btn btn-success btn-sm me-2" onClick={handleSaveChanges}>
                        Save
                    </button>
                ) : (
                    <button className="btn btn-warning btn-sm me-2" onClick={handleEditMovie}>
                        Edit
                    </button>
                )}
                <button className="btn btn-danger btn-sm mt-1" onClick={handleDeleteMovie}>
                    X
                </button>
            </div>
        </li>
    );
});

export default MovieItem;