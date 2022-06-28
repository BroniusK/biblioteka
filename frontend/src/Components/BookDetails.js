import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { Link } from 'react-router-dom';

const BookDetails = () => {
    const { id } = useParams();
    const { data: book, error, isPending } = useFetch('http://localhost:8000/books/' + id);
    const history = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/books/' + book.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="book-details">
            <h2>Apie knyga - {id}</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {book && (

                <article>
                    <h2>{book.title}</h2>
                    <p>Knygos autorius {book.author}</p>
                    <div>{book.body}</div>
                    <button onClick={handleClick}>Pašalinti knygą</button>
                    <Link to={`edit/${book.id}`}><button>Redaguoti knygą</button></Link>
                </article>)}



        </div>
    );

}

export default BookDetails;