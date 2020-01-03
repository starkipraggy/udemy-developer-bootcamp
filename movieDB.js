var movieDB = [
  {
    name: "My Neighbour Totoro",
    rating: "5",
    hasWatched: true
  },
  {
    name: "Inception",
    rating: "5",
    hasWatched: false
  },
  {
    name: "Cats",
    rating: "0",
    hasWatched: false
  }
];

movieDB.forEach(movieObj => {
  console.log("You have " + 
    (movieObj.hasWatched ? "watched \"" : "not seen \"") + 
    movieObj.name + "\" - " + movieObj.rating + " stars");
});