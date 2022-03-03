let movies = [{
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

for (let i = 0; movies.length > i; i++) {
  if (movies[i].hasWatched === true) {
    document.write("<p> You have watched " + '"' + movies[i].title + '"' + " - " + movies[i].rating + " stars <br> </p>");
  } else {
    document.write("<p>You have not seen " + '"' + movies[i].title + '"' + " - " + movies[i].rating + " stars <br> </p>");
  }
}