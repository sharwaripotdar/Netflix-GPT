import { useSelector } from "react-redux"
import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"


const MainContainer = () => {
  const movies = useSelector(store=>store.movies?.nowPlayingMovies)

  //if nowPlayingMovies is null then it return from here only, not procede to next so code wont break also knwon as(early-return)same (!movies)
  if(movies===null)return;

  const mainMovie = movies[3];
  console.log(mainMovie);

  const {original_title, overview, id} = mainMovie;





  return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
