import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom';
import routes from "./routes";
import AppBar from './components/AppBar';
import Loader from './components/Loader';

import NotFound  from './views/NotFound';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: home-page" */))
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "movies-page" */))
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "Movie-details-page" */))


export default function App(){
    return(
       <>
        <AppBar />
        <Suspense fallback={<Loader/>}>
            <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route exact path={routes.movies} component={MoviesPage} />
                <Route path={routes.movieDetails} component={MovieDetailsPage} />
                <Route component={NotFound} />
            </Switch>
        </Suspense>
       </>
    )
}