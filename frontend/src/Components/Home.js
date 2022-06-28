import BooksList from './BooksList';
import useFetch from "../useFetch";

function Home() {
    const {data, bookTitle, isPending, error, setData } = useFetch('http://localhost:8000/books')

    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div> Loaiding...</div>}
            {data && <BooksList books={data} title={bookTitle} />}
        </div>
    );
}

export default Home;