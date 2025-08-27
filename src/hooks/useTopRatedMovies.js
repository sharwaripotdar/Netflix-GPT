import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";



const useTopRatedMovies = () => {
    // Fetch Data from TBDM API and update store
    // fetching popular movies and putting it into the store
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;