





// finds accounts based on the ID provided.
function findAccountById(accounts, id) {
  for(let person in accounts) 
  {
    if(id === accounts[person].id)
    {return accounts[person]}
  }
  return null
}

function sortAccountsByLastName(accounts) {
  accounts.sort((nameA, nameB) => nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1)
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0
  for (let book of books)
  {
    for (let barrow of book.borrows)
    {
      if (account.id == barrow.id)
      {total += 1}
    }
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let final = [];

  for (let book of books) {
    const lastBorrow = book.borrows[0]; // Get latest borrow record

    if (lastBorrow.id === account.id && !lastBorrow.returned) {
      const author = authors.find(author => author.id === book.authorId);
      final.push({...book, author});
    }
  }
  return final;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
