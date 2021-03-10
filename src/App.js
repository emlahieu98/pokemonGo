
import './App.css';
import PokemonList from './containers/PokemonList'
import Pokemon from "./containers/Pokemon";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import {Switch, Route, NavLink, Redirect} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <nav className="">
        <NavLink to={"/"}>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown">
              <Avatar
                className="avatar"
                alt="Hieu"
                src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
              />
            </a>
            <div class="dropdown-content">
              <Link class="dropdown-item" to={`/profile`}>
                Profile
              </Link>
              <Link class="dropdown-item" to={`/login`}>
                Logout
              </Link>
            </div>
          </li>
        </NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={PokemonList} />
        <Route path={"/profile"} exact component={Pokemon} />
        <Route path={"/pokemon/:id"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
