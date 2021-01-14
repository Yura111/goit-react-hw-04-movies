import { Component } from "react";
import { Link, Route } from "react-router-dom";
import routes from "../../routes";
import { getMovie } from './../../services/api-movies';

import Cast from './../../views/Cast';
import Reviews from './../../views/Reviews';

export default class MovieDetailsPage extends Component{

    state = {
        id:0,
        title:'',
        overview:'',
        genres:[],
        poster_path:null,
        vote_average:0,
        release_date:''
    }

    componentDidMount = () =>{

        console.log(this.props)

        const { movieId } = this.props.match.params;

        getMovie(movieId)
        .then(({id, title, overview, genres, poster_path, vote_average, release_date }) => {
            // console.log(genres);
            this.setState({
                id:id,
                title:title,
                overview:overview,
                genres:genres,
                poster_path:poster_path,
                vote_average:vote_average,
                release_date
            })
        })
    }

    handleGoBack = () => {
        const { history, location } = this.props

        // if(location.state && location.state.from)
        //    return history.push(location.state.from);

        // history.push(routes.home);

        history.push(location?.state?.from || routes.home);

    }

    render(){
        const { title, overview, genres, poster_path, vote_average, release_date } = this.state;

        const year = release_date.split('-')[0];

        const { url } = this.props.match;
        const { from } = this.props.location.state;

        console.log(this.props.location);

        return (
            <>
            <button type="button" onClick={this.handleGoBack}>Go back</button>
            <div className="flextwo">
                <div>
                    <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt={title} />
                    {/* {poster_path != null ?
                        <img src={`//image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`} alt={title} />
                        : <img src={`https://dummyimage.com/220x330/2a2a2a/ffffff&text=No+image`} alt="No image" />
                    } */}
                </div>
                <div>
                    <h1>{title} {year && `(${year})`}</h1>
                    <p>User Scope: {vote_average * 10}%</p>

                    <h3>Overview</h3>
                    <p>{overview}</p>

                    <h4>Genres</h4>
                    <div className="genres">{genres.map(({id, name})=>(
                        <span key={id}>{name} </span>
                    ))}</div>
                </div>
            </div>

            <div style={{ borderTop: "2px solid", borderBottom: "2px solid"}}>
                <h3>Additional information</h3>
                <ul>
                    {/* <li><Link to={`${url}/cast`}>Cast</Link></li>
                    <li><Link to={`${url}/reviews`}>Reviews</Link></li> */}

                    <li><Link to={{
                        pathname:`${url}/cast`,
                        state:{from:from}
                    }}>Cast</Link></li>
                    <li><Link to={{
                        pathname:`${url}/reviews`,
                        state:{from:from}
                    }}>Reviews</Link></li>
                </ul>
            </div>
            <Route path={routes.movieCast} component={Cast} />
            <Route path={routes.movieReviews} component={Reviews} />
            </>
        )
    }
}