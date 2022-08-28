function createTitle(title) {
return "The " + title;
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
};

function saveReview(newReview, review) {
  if(review.includes(newReview) === false) {
    return review.push(newReview);}
}

function calculatePageCount(title) {
    return 20 * title.length
}

function writeBook(bookTitle, bookCharacter) {
  return book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length * 20,
    genre: 'fantasy'
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75
  return book
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
