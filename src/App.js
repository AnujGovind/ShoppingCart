import React from 'react';
import { BrowserRouter as Router, useRoutes, Link } from "react-router-dom";
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import './app.css';

const RoutePublic = () => {
    let routes = useRoutes([
      { path: "/", element: <ProductList /> },
      { path: "cart", element: <Cart /> },
      // ...
    ]);
    return routes;
  };

const App = () => {
    return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <nav>
              <Link to="/">Shopping Cart</Link>
              <Link to="/cart" className='float-right'>Cart</Link>
            </nav>
          </div>
        </div>
      </div>
      <RoutePublic/>
    </Router>
  );
}

export default App;
