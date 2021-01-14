import { Component } from 'react';
import queryString from 'query-string';
import SearchFrom from './../../components/SearchFrom';
import MovieItems from './../../components/MovieItems';

import { searchMovie } from './../../services/api-movies'
import { withRouter } from 'react-router-dom';

class MoviesPage extends Component{

    state = {
        results:[],
        currentQuery:''
    }

    componentDidMount = () =>{
        this.updateSearchMovie();
    }

    componentDidUpdate = (prevProps, prevState) =>{
        const { query } = queryString.parse(this.props.location.search);
        const { currentQuery} = this.state;


        if( currentQuery !== query ){
            this.setState({currentQuery:query})
            this.updateSearchMovie();
        }
    }

    updateSearchMovie = () =>{
        const { query } = queryString.parse(this.props.location.search);

        if(query)
            searchMovie(query)
            .then(results => {
                this.setState({results:results})
            })
    }

    render(){

        const { results } = this.state;

        return (
            <>
                <br/>
                <SearchFrom {...this.props} />

                { results.length >= 0 && <MovieItems results={results} />}
            </>
        )
    }
}

export default withRouter(MoviesPage)