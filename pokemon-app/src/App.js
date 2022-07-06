import './App.css';
import {Route, Switch} from "react-router-dom";
import AllPokemon from "./pages/AllPokemon";
import FavoritePokemon from "./pages/FavoritePokemon";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllPokemon />
        </Route>
        <Route path='/favorites'>
            <FavoritePokemon />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
