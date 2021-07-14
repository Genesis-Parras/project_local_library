function findAuthorById(authors, id) {
  const found = authors.find((authors) => authors.id === id)
  return found; 
}

function findBookById(books, id) {
  const found = books.find((books) => books.id === id)
  return found;
}

// return an array with two arrays in it. 1st array for books checked out 2nd for the others.
function partitionBooksByBorrowedStatus(books) {
// Use the filter() method to filter which books are currently checked out, just need to check the first index of the borrows list
let checkedOut = books.filter((book) => book.borrows[0].returned === false);
// Use filter() method for returned books and just check the first index as well
let returned = books.filter((book) => book.borrows[0].returned === true);
// return both variables inside an array
return [checkedOut, returned]
}

// return an array of the borrows section of the book given that contains account id given
function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return { ...borrow, ...account}
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
