
import { NavLink } from 'react-router-dom';
import routes from './../../routes';

export default function Navigation(){

    console.log(routes.home);

    return(
        <ul>
            <li><NavLink exact to={routes.home} className="NavLink" activeClassName="NavLink--active">Home</NavLink></li>
            <li><NavLink to={routes.movies} className="NavLink" activeClassName="NavLink--active">Movies</NavLink></li>
        </ul>
    )
}