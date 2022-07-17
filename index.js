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
  //create empty array to return movies
  let allMovies = [];
  //loop thru movies array
  for (movie of movies){
    //push all movies into the array
    allMovies.push(movie.title)
  }
  //return the array
  return allMovies;
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
  //if the array of movies is empty, return 0
  if (!movies.length){
    return 0;
  }
  //create empty array to push all metascores into
let arr = [];
//loop thru movies array
for (let i = 0; i < movies.length; i ++){
  //push all metascores into the empty array
  arr.push(Number(movies[i].metascore))
}
//let the highest be the first index
let highest = arr[0]
//loop thru array of scores
for (let j = 1; j < arr.length; j ++){
  //if j is greater than the current highest
if (arr[j] > highest){
  //j is now assigned the highest
  highest = arr[j]
}
}
//return the highest metascore
return highest;
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
  //create variable for sum, starts at 0
  let sum = 0;
  //create empty array to hold all ratings
  let arr = [];
  //if there are no movies, return the sum which is zero
  if (!movies.length){
    return sum;
  }
  //loop thru movies array
  for (let i = 0; i < movies.length; i ++){
    //push all ratings as a number into the array
      arr.push(Number(movies[i].imdbRating))
    }
  //loop thru array of ratings
  for (let j = 0; j < arr.length; j ++){
    //add all ratings
    sum += arr[j];
  }
  //return average of the ratings
  return sum/arr.length;
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
  //create empty object to return key/value pair
  let obj = {};
  //create empty array to store ratings
  let arr = [];
  //loop thru array of movies
  for (let i = 0; i < movies.length; i ++){
    //push all ratings into the array
      arr.push(movies[i].rated);
    }
    //loop thru array and assign key/values to the object 
    for (let rates of arr){
      //if the rate is not in the object, add the key and the value will be 1
      if (!obj[rates]){
        obj[rates] = 1;
      } else {
        //if the rate exists in the object, add 1 to the value
        obj[rates] += 1;
      }
    }
    //return object 
return obj;
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
   //loop thru movies array
  for (let i = 0; i < movies.length; i ++){
    //if the id matches, return the movie title
   if (id === movies[i]["imdbID"]) {
   return movies[i];
  } 
  } 
  //if the id didn't match or the movies array was empty, return null
  return null;
}


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
function filterByGenre(movies, type) {
//create empty array to store movies
  let arr = [];
//loop thru movies array
for (let i = 0; i < movies.length; i ++){
  //check movie genre against inputted type
if (movies[i].genre.toLowerCase().split(", ").includes(type.toLowerCase())){
  //if it matches, push into the array
  arr.push(movies[i])
  }
}
//return final array with movies that match the type given
return arr;
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
 //create empty array to push movie titles into
let arr = [];
//iterate through movies array
for (let i = 0; i < movies.length; i ++){
  /* split the released date and get the third element. because it is a string, convert it into a Number. then check if that year is less than or equal to the given year */
  if (parseFloat(movies[i]["released"].split(" ")[2]) <= year){
    //push the movie into the empty array
arr.push(movies[i]);
  }
}
//return array with all movies
return arr;
}

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
function getBiggestBoxOfficeMovie() {
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
