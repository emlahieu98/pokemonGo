
import './App.css';
import PokemonList from './containers/PokemonList'
import Pokemon from "./containers/Pokemon";
import {Switch, Route, NavLink, Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <nav className="">
        <NavLink to={"/"}> Search </NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/pokemon/:id"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
