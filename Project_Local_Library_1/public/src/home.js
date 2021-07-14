function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowed = 0;
  // check if book is not returned, if so increase the count by 1
  books.forEach((book) => {
    if(book.borrows[0].returned === false) borrowed++;
  })
  return borrowed;
}

// return an array of 5 or less most popular genres in decending order.
function getMostCommonGenres(books) {
  // crete an empty array
  const genres = [];
  // loop through book
  books.forEach((book) => {
    // find the genre
    const genreToMatch = genres.find((genre) => genre.name === book.genre);
    // check if the genre matches with genreToMatch ...
    if (genreToMatch) {
      // ... increment the count by 1
      genreToMatch.count++;
    } else {
      // if not a match then push it ino the array with count value of 1
      // push it as an object already so declare new variable that will be a key with value of book.genre
     let name = book.genre;
      genres.push({ name , count: 1 });    
    }
  });
  // return the genre array while sorting it and slicing it down to 5
  return genres.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1)).slice(0, 5)
}

 
  /*
  Got stuck doing this method ... try and figure it out before next mentor session
  function getMostCommonGenres(books) {
    // creat an empty object
    let genres = {};
    // loop through books
    books.forEach((book) => {
      // of there genre already exist in the genres object ...
      if(genres[books.genre]) {
        // .. increment by 1
        genres[book.genre]++
      } else {
        // if it doesn't exist in the genres object add it and set the value to 1
        genres[book.genre] = 1;
      }
    })
    // turn object into array
    const result = [];
    for(let genre in genres){
      result.push({genre, count: genres[genre.count]})
    }
    return result.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1)).slice(0,5)
  }
*/




function getMostPopularBooks(books) {
    return books.map((book) => {
      return {name: book.title, count: book.borrows.length}
    }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
}

function getMostPopularAuthors(books, authors) {
  // map books and find the authors id that matches the book authorId
  return books.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    // create name key and join the authors first and last name
    // create the count key as well and make the value the amount of times borrowed
    return {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length}
    // sort in order of highest count and use slice to keep it to top 5 only
  }).sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
