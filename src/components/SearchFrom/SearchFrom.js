import { Component } from "react"


export default class SearchFrom extends Component{

    state = {
        search:''
    }

    handleChange = ({target}) => {
        this.setState({search:target.value})
    }

    handleSubmit = evt => {
        evt.preventDefault();
        const {search} = this.state;

        const { history, location } = this.props;

        history.push({
            pathname: location.pathname,
            search: `?query=${search}`,
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="query" onChange={this.handleChange} />
                <button type="submit">search</button>
            </form>
        )
    }
}