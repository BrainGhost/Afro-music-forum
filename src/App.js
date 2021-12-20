import Navbar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./components/create";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/notfound";
import Categorie from "./components/categorie";
import MusicianDetails from "./components/musicianDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/categories">
              <Categorie />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/movie/:id">
              <MovieDetails />
            </Route>
            <Route path="/musician/:id">
              <MusicianDetails />
              {/* <MovieDetails /> */}
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
