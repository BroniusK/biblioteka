import { Link } from "react-router-dom";

function BooksList ({ books, title }) {
    return (
        <div className="book-list">
            <h2>{title}</h2>
            {books.map((book) => (
                <div className="book-preview" key={book.id}>
                    <Link to={`/books/${book.id}`}>
                        <h2>{book.title}</h2>
                        <p>Autorius: {book.author}</p>                    </Link>
                </div>

            ))}
        </div>
    );
}

export default BooksList;