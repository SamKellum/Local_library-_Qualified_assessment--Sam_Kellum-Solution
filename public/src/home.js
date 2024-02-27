




function getTotalBooksCount(books) {
 let count = 0
books.forEach((book) => count++)
return count
}

function getTotalAccountsCount(accounts) {
  let count = 0
  accounts.forEach((account) => count++)
  return count
}

function getBooksBorrowedCount(books) {
 let booksBorrowed = 0
 for (let book of books)
 {
  let borrowArr = book.borrows[0];
      if (borrowArr.returned == false)
      {
          booksBorrowed++
      }
 } 
 return booksBorrowed
}

function topFive(array) {
  let mostPopular = array

    .sort((countA, countB) => (countA.count < countB.count ? 1 : -1))
    .slice(0, 5);

  return mostPopular;
}



function getMostCommonGenres(books) {
  const genresOfBooks = books.map((book) => book.genre);
  const genreCount = [];

  genresOfBooks.map((genre) => {
      const location = genreCount.findIndex((element) => element.name === genre);
      if (location >= 0) {
          genreCount[location].count += 1;
      } else {
          genreCount.push({ name: genre, count: 1 });
      }
  });

  // Sort genres in descending order based on count
  genreCount.sort((genreA, genreB) => genreB.count - genreA.count);

  // Take the top five genres
  let finalFive = topFive(genreCount)

  return finalFive;
}






function getMostPopularBooks(books) {
  let initArr =[]
  for (let book of books)
  {
      let counter = book.borrows.length
      initArr.push({ name: book.title, count: counter })
  }
 return topFive(initArr)
}



function getMostPopularAuthors(books, authors) {
  let initArr = [];
  for (let book of books) {
    let authorObj = authors.find((author) => author.id == book.authorId);
    let authorName = `${authorObj.name.first} ${authorObj.name.last}`;
    let counter = book.borrows.length;
    initArr.push({name: authorName, count: counter});
  }

  return topFive(initArr)
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
