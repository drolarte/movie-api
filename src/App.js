import './App.css';
import React, { useReducer, useEffect } from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import Search from './components/Search';
import About from './components/About';
import spinner from './components/ajax-loader.gif';
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {initialState, reducer} from "../src/components/reducer/";
import axios from 'axios';


const MOVIE_API_URL = "https://www.omdbapi.com/?apikey=de70d052&s=star wars"
const App = () => {

  const [state, dispatch] =  useReducer(reducer, initialState);

     useEffect(() => {
        axios.get(MOVIE_API_URL).then(jsonResponse => {
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload : jsonResponse.data.Search
            });
            console.log(jsonResponse.data.Search);
        });
    }, []);
 
  
    
    const search = searchValue => {
        dispatch({
          type: "SEARCH_MOVIES_REQUEST"
        });

        axios.get(`${searchValue}/?&s=star wars&apikey=de70d052`).then(
          jsonResponse => {
            if (jsonResponse.data.Response === "True") {
              dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.data.Search
              });
            } else {
              dispatch({
                type: "SEARCH_MOVIES_FAILURE",
                error: jsonResponse.data.Error
              });
              alert(jsonResponse.data.Error)
            }
          }
        );
      };

      const { movies, loading, errorMessage } = state;
     
      const retrievedMovies =
      loading && !errorMessage ? (
        <img className="spinner" src={spinner} alt="Loading spinner" />
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        movies.map((movie, index) => (
          <MovieList movie={movie} />
        ))
      );
     

    return (

        <Router>
            <Sidebar/>
            <Switch>
                <Route exact path="/">
                    <Search search={search}/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/movielist">
                    <Header/>
                <div className="movies">{retrievedMovies}</div>
                </Route>
            </Switch>
        </Router>
      );
}
export default App;
