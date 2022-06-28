// ## antras variantas

import { useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useNavigate } from 'react-router-dom';

function EditBook({books}) {
    const [editedTitle, setEditedTitle] = useState('');
    const [editedBody, setEditedBody] = useState('');
    const [editedAuthor, setEditedEdAuthor] = useState('');

    const [editingTitle, setEditingTitle] = useState(false);
    const [editingBody, setEditingBody] = useState(false);
    const [editingAuthor, setEditingAuthor] = useState(false);

    const history = useNavigate();

    const { id } = useParams();

    const { data: book, error, isPending } = useFetch('http://localhost:8000/books/' + id);

    const handleSave = (e) => {
        e.preventDefault();

        let title = editingTitle ? editedTitle : book.title;
        let body = editingBody ? editedBody : book.body;
        let author = editingAuthor ? editedAuthor : book.author;

        const editedBook = { title, body, author };

        fetch('http://localhost:8000/books/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedBook)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="create">
            {/* <h2>Redaguoti knygą - {id}</h2> */}
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {book && (<form>
                <label>Knygos pavadinimas:</label>
                <input 
                type="text" 
                value={editingTitle ? editedTitle : book.title} onChange={(e) => {
                    setEditingTitle(true);
                    setEditedTitle(e.target.value);
                }} />

                <label>Knygos apibūdinimas:</label>
                <textarea value={editingBody ? editedBody : book.body} onChange={(e) => {
                    setEditingBody(true);
                    setEditedBody(e.target.value);
                }} ></textarea>

                <label>Knygos autorius:</label>
                <input type="text" value={editingAuthor ? editedAuthor : book.author} onChange={(e) => {
                    setEditingAuthor(true);
                    setEditedEdAuthor(e.target.value);
                }}></input>

                <button onClick={handleSave}>Išsaugoti</button>
            </form>)}
        </div>
    );
}

export default EditBook;