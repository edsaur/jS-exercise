let movies = [
  {
    title: "Spider-Man: No Way Home",
    rating: 3.5,
    hasWatched: true
  },

  {
    title: "Unbroken",
    rating: 5,
    hasWatched: true
  },

  {
    title: "Frozen 2",
    rating: 5,
    hasWatched: false
  },

  {
    title: "Encanto",
    rating: 5,
    hasWatched: false
  },

  {
    title: "Forrest Gump",
    rating: 5,
    hasWatched: true
  }
];

const printWatched = document.querySelector(".moviesWatched");
const printNotWatched = document.querySelector(".moviesNotWatched");
let moviesWatched = '';
let moviesNotWatched  = '';

for (let i = 0; movies.length > i; i++) {
  if (movies[i].hasWatched) {
    moviesWatched += `<p> You have watched ${movies[i].title} -  ${movies[i].rating} stars. </p>`;
  } else {
    moviesNotWatched += `<p> You have not seen ${movies[i].title} - ${ movies[i].rating} stars </p>`;
  }
}
printWatched.innerHTML = moviesWatched;
printNotWatched.innerHTML = moviesNotWatched;