import "./App.css";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/Details/:id"
            render={(props) => <Details {...props} exact />}
          />
          <>
            <MovieList />
            <AddMovie />
          </>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
