import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 

<div className="not_found">
    <h2>Sorry</h2>
    <p>Puslapis nerastas</p>
    <Link to='/'>Grižti į pradžios puslapį ... </Link>
</div>

     );
}
 
export default NotFound;