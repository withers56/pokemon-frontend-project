
import './App.css';
import {Route, Switch} from "react-router-dom";
import AllPokemon from "./pages/AllPokemon";
import FavoritePokemon from "./pages/FavoritePokemon";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <AllPokemon />
        </Route>
        <Route path='/favorites'>
            <FavoritePokemon />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
