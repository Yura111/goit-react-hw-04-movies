import { Component } from "react"
import { getMovieReviews } from './../../services/api-movies'

export default class Reviews extends Component{

    state = {
        reviews:[]
    }

    componentDidMount = () =>{
        const { movieId } = this.props.match.params;

        getMovieReviews(movieId)
        .then(reviews => {
            this.setState({reviews});
        })
    }

    render(){
        const {reviews} = this.state;
        return (
            <ul>
                {reviews.map(({id, author, content})=>(
                    <li key={id}>
                        <h5> Author: {author}</h5>
                        <p>{content}</p>
                        <hr/>
                    </li>
                ))}
            </ul>
        )
    }
}