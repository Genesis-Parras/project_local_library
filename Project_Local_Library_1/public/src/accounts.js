// use find in order to find the id
function findAccountById(accounts, id) {
  let found = accounts.find((accounts) => accounts.id === id)
  return found;
}

// use .sort to sort by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last > b.name.last ? 1 : -1 )
}


// find how many times the id in account matches to the id in borrows of all the books
function getTotalNumberOfBorrows(account, books) {
  // create a variable to hold the count of books borrowed
  let booksBorrowed = 0;
  // use forEach to loop through the books
    books.forEach((book) => {
      // use forEach again to loop through the book's borrowed list
      book.borrows.forEach((borrows) => {
        // check condition: if the account.id is in the borrws.id
        if(account.id === borrows.id) {
          // increase the counter by 1
          booksBorrowed++;
        }
      })
    })
    return booksBorrowed;
}

  /* 
    return an array of all current books checked out by account given.
    Will return an array that contains the book object with the author object in it 
  */
// helper function to meet rubric
    function currentCheckedOut(account,books)
    {
      const id = account.id;
      const checkedOut = [];
      for(let theBook of books)
      {
         if(theBook.borrows.some((person) => person.id === id && !person.returned))
          {
              checkedOut.push(theBook);
          }
      }
      return checkedOut;
    } 
// helper function to meet rubric
    function addAuthor(books,authors) {
      for(let theBook of books) {
         const authorId = theBook.authorId;
         const theAuthor = authors.find((author) => author.id === authorId);
         theBook[`author`] = theAuthor;
      }
      return books;
    }

function getBooksPossessedByAccount(account, books, authors) {
  const checkedOut = currentCheckedOut(account, books);
  const result = addAuthor(checkedOut, authors);
  return result;
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
