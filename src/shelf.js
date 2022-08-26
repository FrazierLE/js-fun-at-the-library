  function shelfBook(book, shelfGenre) {
    return shelfGenre.unshift(book)
  }

// function saveReview(newReview, review) {
//   if(review.includes(newReview) === false) {
//     return review.push(newReview);}
// }


module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
