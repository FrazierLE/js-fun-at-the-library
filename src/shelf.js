  function shelfBook(book, shelfGenre) {
    if (shelfGenre.length < 3) {
    return shelfGenre.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
    return shelf.splice(i, 1)
    }
  }
}


function listTitles(title) {
  var titlesOnShelf = []
  for (var i = 0; i < title.length; i++) {
    titlesOnShelf.push(title[i].title)
}
  return titlesOnShelf.join(', ')
  }


function searchShelf(shelfName, bookName) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookName) {
      return true }
    }
    return false
  }



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
