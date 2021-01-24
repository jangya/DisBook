import './App.css';
import AddBook from './components/books/AddBook';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/books/add" component={AddBook} />
            <Route exact path="/books/edit/:id" component={AddBook} />
            {/* <Route component={NotFound} /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
