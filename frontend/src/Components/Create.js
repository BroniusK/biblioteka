import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/books', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(book)
        }).then(() => {
            console.log('new book prideta');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Prideti naują knygą</h2>
            <form onSubmit={handleSubmit}>
                <label>Knygos pavadinimas:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Knygos apibūdinimas:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Knygos autorius:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                
                {!isPending && <button>Prideti naują knygą</button>}
                {isPending && <button disabled>Pridedame knyga ...</button>}
            </form>
        </div>
    );
}

export default Create;