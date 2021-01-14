import axios from 'axios';


axios.defaults.baseURL = 'https://api.themoviedb.org/3'
axios.defaults.params = {}
axios.defaults.params['api_key'] = '3ac108b4a8c39f97e15d9c6a4800e731'

const getTrending = async ({mediaType="all", timeWindow="week"}) =>{

    // media_type = all, movie, tv, person
    // time_window = day, week

    try{

        return await axios.get(`/trending/${mediaType}/${timeWindow}`)
            .then(res => res.data.results);

    }catch (err) {
        return []
    }
}

const getMovie = async ( movieId ) =>{

    try{

        return await axios.get(`/movie/${movieId}`)
            .then(res => res.data);

    }catch (err) {
        return;
    }
}

const getMovieCast = async ( movieId ) =>{

    try{

        return await axios.get(`/movie/${movieId}/credits`)
            .then(res => res.data.cast);

    }catch (err) {
        return []
    }

}

const getMovieReviews = async ( movieId ) =>{

    try{

        return await axios.get(`/movie/${movieId}/reviews`)
            .then(res => res.data.results);

    }catch (err) {
        return []
    }

}

const searchMovie = async ( query ) =>{
   
    try{

        return await axios.get(`/search/movie`, {params:{
                query:query
            }})
            .then(res => res.data.results);

    }catch (err) {
        return []
    }

}



export {
    getTrending,
    getMovie,
    getMovieCast,
    getMovieReviews,
    searchMovie
}

export default { 
    getTrending,
    getMovie,
    getMovieCast,
    getMovieReviews,
    searchMovie
}