import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Library from './components/Library';


function App() {
  return (
    <Router>

      <div>
        <nav>
          <ul>

            <li>
              <NavLink to="/">Домашняя страница</NavLink>
            </li>
            <li>
              <NavLink to="/library">Библиотека</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Корзина книг</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>

          <Route exact path="/" Component={Home} />


          <Route path="/library" Component={Library} />


          <Route path="/cart" Component={Cart} />


        </Routes>

      </div>

    </Router>

  );
}

export default App;
