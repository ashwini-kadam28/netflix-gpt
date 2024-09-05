
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header'
import MainContainer from './MainContainer';


import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer  />
      <SecondaryContainer />
    </div>
  )
}

export default Browse