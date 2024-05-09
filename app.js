import * as moviesService from "./movies/index.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allMovies = await moviesService.getAllMovies();
      return console.log(allMovies);
    case "getById":
      const oneMovie = await moviesService.getMovieById(id);
      return console.log(oneMovie);
    case "add":
      const newMovie = await moviesService.addMovie(data);
      return console.log(newMovie);
    case "updateById":
      const updateMovie = await moviesService.updateMovieById(id, data);
      return console.log(updateMovie);
    case "deleteById":
      const deleteMovie = await moviesService.deleteMovieById(id);
      return console.log(deleteMovie);
  }
};
// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "zCd_RioNMOBaQwAXnc8PX" });
// invokeAction({
//   action: "add",
//   title: "Avatar: way of water",
//   director: "James Cameron",
// });
// invokeAction({
//   id: "ck89qe3HriUDHe09TBoJ8",
//   action: "updateById",
//   title: "Avatar: way of water",
// });

invokeAction({ action: "deleteById", id: "zCd_RioNMOBaQwAXnc8PX" });
