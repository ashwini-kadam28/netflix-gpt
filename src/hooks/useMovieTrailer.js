import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/Contants";
import { addTrailerVideo } from "../components/utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const disptach = useDispatch();
    //fetch trailer video
    const getMovieVideos = async()=>{
    const data = await fetch(`https://api.themoviedb.org/3/movie/`+ movieId + `/videos?language=en-US`, API_OPTIONS)
    const jsondata = await data.json();
    const filterData = jsondata?.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : jsondata.results[0]
    disptach(addTrailerVideo(trailer))
    }

    useEffect(()=>{
        getMovieVideos();
    },[])
}

export default useMovieTrailer;