import { addNewMovie, getMovies, getMovieWithId, updateMovie, deleteMovie, getMoviesFiltered  } from '../controllers/cineVibeController'

const routes = (app) => {

    //create route for donations
    app.route('/movies')
      //create get request
      .get(getMovies)
      //create post request
      .post(addNewMovie);

    app.route('/movies/:movieId')
      .get(getMovieWithId)
      //create put request
      .put(updateMovie)
      //create delete request
      .delete(deleteMovie)

    app.route('/moviesFiltered/:searchValue')
      .get(getMoviesFiltered)
    
  }
  // export it!
  export default routes;