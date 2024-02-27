





function findAuthorById(authors, id) {
return authors.find((author) => id == author.id )
}


function findBookById(books, id) {
  return books.find((book) => book.id == id)
}



function partitionBooksByBorrowedStatus(books) {
  let isReturned = [];
  let notReturned = [];

  for (let book of books) {
    const borrows = book.borrows; // Access the borrows property directly
    const latestBorrow = borrows[0]; // start from the latest

    if (latestBorrow.returned) {
      isReturned.push(book);
    } else {
      notReturned.push(book);
    }
  }

  return [notReturned, isReturned];
}



function getBorrowersForBook(book, accounts) {
  return book.borrows.reduce((result, borrow) => {
    let matchingAccount = accounts.find((account) => account.id === borrow.id);
    if (matchingAccount) {
      matchingAccount['returned'] = borrow.returned;
      result.push(matchingAccount);
    }
    return result;
  }, []).slice(0, 10);
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
