import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";



const useUpcomingMovies = () => {
    // Fetch Data from TBDM API and update store
    // fetching popular movies and putting it into the store
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;