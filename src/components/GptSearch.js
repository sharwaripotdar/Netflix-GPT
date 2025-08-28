import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constant"

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
                <img
                  className=""
                  src={BG_URL}
                  alt="backgroung_img"
                />
              </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch
