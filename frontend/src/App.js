import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Components/Create';
import BookDetails from './Components/BookDetails';
import NotFound from './Components/NotFound';
import EditBook from './Components/EditBook';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/books/:id">
              <BookDetails />
            </Route>
            <Route path='books/edit/:id'>
              <EditBook />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
