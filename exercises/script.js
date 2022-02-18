let movies = [{
  title: "Train to Busan",
  rating: 4.5,
  hasWatched: true
}, 

{
  title: "Encanto",
  rating: 5,
  hasWatched: false
},

{
  title: "Die Hard",
  rating: 4.6,
  hasWatched: false
}, 
  
{
  title: "Spider-Man: No Way Home",
  rating: 5,
  hasWatched: true
}];

for (let i = 0; movies.length > i; i++) {
    if(movies[i].hasWatched === true) {
      console.log("You have watched " + '"' + movies[i].title + '"' + " - " + movies[i].rating + " stars")
    } else {
      console.log("You have not seen " + '"' + movies[i].title + '"' + " - " + movies[i].rating + " stars")
    }
}

