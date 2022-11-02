import './App.css';
import DessertList from './Components/DessertList';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Home from './Components/Home';
import RecipeDetails from './Components/RecipeDetails';
import { createContext, useReducer, useState } from 'react';
import Favourites from './Components/Favorties';
import FavoriteContext from './Components/FavoriteContext';

//declaring reducer
function reducer(state, action) {
  let newState = state.favorites;
  if (newState.includes(action.id) === false) {
    newState = [...state.favorites, action.id];
    console.log(newState)

  }

  return { favorites: newState };
}

function App() {


  const [favorite, dispatch] = useReducer(reducer, {
    favorites: []
  });//initialvalue []

  //setFavorite(["Hello"]);
  return (
    //Global context starting tag:
    <div className="App">
      <FavoriteContext.Provider value={[favorite, dispatch]}>
        <Router>

          <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <ul>
                      <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                      <Link className="nav-link active" to="/dessertlist">Dessert List</Link>
                      <Link className="nav-link active" to="/favorites">Favorites</Link>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/dessertlist" element={<DessertList />} />
              <Route path="/details/:id" element={<RecipeDetails />} />
              <Route path="/favorites" element={<Favourites />} />
            </Routes>
          </div>
        </Router>
      </FavoriteContext.Provider>
    </div>
  );
}

export default App;

