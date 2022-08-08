import React from 'react';
import { BrowserRouter as Router, useRoutes, Link } from "react-router-dom";
import Cart from './components/Cart';
import ProductList from './components/ProductList';

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
                     {/* <h1>Shopping Cart</h1>                     */}
                 </div>
             </div>
                    <nav>
                      <ul>
                        <li>
                          <Link to="/">Shopping Cart</Link>
                        </li>
                        <li>
                          <Link to="/cart">Cart</Link>
                        </li>
                      </ul>
                    </nav>
                </div>

                    {/* 👇️ Wrap your Route components in a Routes component */}
                    <RoutePublic/>
                </Router>
                  );
                }

export default App;
