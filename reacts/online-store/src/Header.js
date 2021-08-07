import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__inner">
        <Link to="/">
          <img className="header__logo" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png" />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <div className="header__user">
            <span>Hello, Guest!</span>
            <span>Sign in</span>
          </div>
          <Link to="/checkout">
            <div className="header__cart">
              <ShoppingBasketIcon />
              <span className="header__basketCount">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
