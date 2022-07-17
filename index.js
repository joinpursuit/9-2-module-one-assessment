/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  let movieTitles = [];
  for (let i=0; i<movies.length; i++) {
    movieTitles.push(movies[i].title)
  }
  return movieTitles;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  if (movies.length === 0) {                                   //guard clause for empty array
    return 0;
  }
let currentHighestMeta = Number(movies[0].metascore);          //initialize 
  for (let i=1; i<movies.length; i++) {
    if (Number(movies[i].metascore) > currentHighestMeta) {    // if score is higher then accumulate
      currentHighestMeta = Number(movies[i].metascore)
     }
  }
  return currentHighestMeta;                                    // return highest metascore
  }
/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  if (movies.length === 0) {
    return 0;                                                   //guard clause for empty array
  }
  let numOfMovies = 0;                                          // Initialize
  let totalScore = 0; 
  for (let i=0; i<movies.length; i++) {
    totalScore += Number(movies[i].imdbRating);                  // Accumulate with loop
    numOfMovies++;
  }
  return totalScore/numOfMovies;                                // return total by number of elem. for average
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  let movieRatings = {};
  if (movies.length === 0) {
    return movieRatings;
  }
  for (i=0; i<movies.length; i++) {
    if (movieRatings[movies[i].rated]) {
      movieRatings[movies[i].rated]++;
    } else {
      movieRatings[movies[i].rated] = 1;
    }
  }
  return movieRatings;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  let movieObject;                                          //initialize
  let allIds = [];
  for (let i=0; i<movies.length; i++) {
    if (movies[i].imdbID === id) {               // if the id matches the imdbID of the current object then assign object to movieObject var
      movieObject = movies[i];
    }
    allIds.push(movies[i].imdbID)                       //pushes all imdbIds into one array to be used for guard clause error message
  }
  if (!allIds.includes(id) || movies.length === 0) {    // if the id argument does not match any of the existing imdbIds or '{}' return null
    return null;
  } else {
    return movieObject;
  }
}
// findById(exampleMovies, "tt1979376");


/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  let moviesWithGenre = [];
  formatGenre = genre[0].toUpperCase() + genre.slice(1).toLowerCase();  // formats string parameter Genre
  for (let i=0; i<movies.length; i++) {
    let genreArray = movies[i].genre.split(', ');   // splits several strings representing genres into array
    if (genreArray.includes(formatGenre)) {  //if genreArray includes genre argument then push that movie obj.
      moviesWithGenre.push(movies[i])
    }
  }
  return moviesWithGenre;
}

/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  let releasedMovies = [];
  for (let i=0; i<movies.length; i++) {
    if (Number(movies[i].released.split(" ")[2]) <= year) {
      releasedMovies.push(movies[i]);
    }
  }
  return releasedMovies;
}
// getAllMoviesReleasedAtOrBeforeYear(exampleMovies, 2000)


/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */


 function getBiggestBoxOfficeMovie(movies) {
  let mostProfit = 0;    //initialize
  let movieTitle = "";   
  if (movies.length === 0) {          //Guard clause for error message empty array
    return null;
  }
for (let i=0; i<movies.length; i++) {         
    let boxOfficeFormat = Number(movies[i]['boxOffice'].replace(/[$,]/g, ''));  // format boxOffice string
    if (boxOfficeFormat > mostProfit) {   //if current iteration box office > current, reassign mostprofit
      mostProfit = boxOfficeFormat;
      movieTitle= movies[i]['title'];     // reassign movietitle with highest box office
    }
  }
  return movieTitle;
}



// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
