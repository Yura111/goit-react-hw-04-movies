import { Component } from "react"
import { getMovieCast } from './../../services/api-movies'

export default class Cast extends Component{

    state = {
        casts:[]
    }

    componentDidMount = () => {
        const { movieId } = this.props.match.params;

        getMovieCast(movieId)
            .then(casts => {
                // console.log(res)
                this.setState({casts})
            })
    }


    render(){
        const { casts } = this.state;
        console.log(casts)

        return (
            <ul style={{ width: "max-content"}}>
                {casts.map(({id, name, profile_path, character})=>(
                    <li key={id}>

                        {profile_path && <img src={`https://image.tmdb.org/t/p/w138_and_h175_face/${profile_path}`} alt={name}/>}
                        <div>{name}</div>
                        <div>Character: {character}</div>
                        <hr/>
                    </li>
                ))}
            </ul>
        )
    }
}