import React, { useState, useEffect } from "react";
import './App.css';
import PokemonList from './containers/PokemonList'
import Pokemon from "./containers/Pokemon";
import Avatar from "@material-ui/core/Avatar";
import ShoppingCartTwoToneIcon from "@material-ui/icons/ShoppingCartTwoTone";
import { Link } from "react-router-dom";
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

function App() {
  const setState = async (a) => {
    //const a = await localStorage.getItem("listPokemon").length
    setCart(a)
  };
  //let item
  //setList(localStorage.getItem("listPokemon"))
  // setCount(listItem.split(",").filter((item) => item.length > 0).length);


  // if (listItem == null) {
  //   var arr = 0
  // } else {
  //   var arr = listItem.split(",").filter((item) => item.length > 0).length;  
  // }
  //console.log(JSON.stringify(listItem));
  const [cart, setCart] = useState(0);
  const [item, setList] = useState()
  useEffect(() => {
    setList(localStorage.getItem("listPokemon").length);
    if (item) {
      setCart(item)
    }
  }, [item]);
  useEffect(() => {
    setCart(item);
  }, [cart, item])
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
        <div>
          <Link to={``}>
            <div className="quantity">
              <p className="text-muted">{cart}</p>
            </div>
            <ShoppingCartTwoToneIcon
              className="icon-cart"
              //setState={setState}
            />
          </Link>
        </div>
      </nav>
      <Switch>
        <Route path={"/"} exact component={() => <PokemonList setState={setState}/>} />
        <Route path={"/profile"} exact component={Pokemon} />
        <Route path={"/pokemon/:id"} exact component={Pokemon} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
