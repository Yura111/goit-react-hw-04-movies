
import { Component } from 'react';
import { getTrending } from './../../services/api-movies';

import MovieItems from './../../components/MovieItems';

export default class HomePage extends Component{

    state ={
        results:[]
    }
    
    componentDidMount = () =>{
        getTrending({timeWindow:"day"})
        .then(results => {
            this.setState({results})
        })
        .catch(err => console.log('Error', err))
    }

    render(){
        const { results } = this.state;

        return (
            <>
                <h1>Trending today</h1>

                { results.length >= 0 && <MovieItems results={results} />}
                
            </>
        )
    }
}