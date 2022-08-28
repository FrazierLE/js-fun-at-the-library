
function createLibrary(name) {
var libraryName = {
  name: name,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: []}
  }
  return libraryName
}

function addBook(libraryName, book) {
if (libraryName.shelves.hasOwnProperty('fantasy') === true && book.genre === 'fantasy') {
libraryName.shelves.fantasy.push(book) }
if (libraryName.shelves.hasOwnProperty('nonFiction') === true && book.genre === 'nonFiction') {
libraryName.shelves.nonFiction.push(book) }
if (libraryName.shelves.hasOwnProperty('fiction') === true && book.genre === 'fiction') {
libraryName.shelves.fiction.push(book) }
}


  function checkoutBook(libraryName, book, genre) {
  var titlesOnShelf = []
  for (var i = 0; i < libraryName.shelves.fiction.length; i++) {
    titlesOnShelf.push(libraryName.shelves.fiction[i].title)
}
  for (var i = 0; i < libraryName.shelves.nonFiction.length; i++) {
  titlesOnShelf.push(libraryName.shelves.nonFiction[i].title) }
  for (var i = 0; i < libraryName.shelves.fantasy.length; i++) {
    titlesOnShelf.push(libraryName.shelves.fantasy[i].title)
  }


  if (genre === 'fiction') { for (var i = 0; i < libraryName.shelves.fiction.length; i++) {
    if (libraryName.shelves.fiction[i].title === book) {libraryName.shelves.fiction.splice(i, 1)}
  } return `You have now checked out ${book} from the ${libraryName.name}`}

  else if (genre === 'nonFiction') { for (var i = 0; i < libraryName.shelves.nonFiction.length; i++) {
    if (libraryName.shelves.nonFiction[i].title === book) {libraryName.shelves.nonFiction.splice(i, 1)}
    return `You have now checked out ${book} from the ${libraryName.name}`}

  } else if (genre === 'fantasy') { for (var i = 0; i < libraryName.shelves.fantasy.length; i++) {
    if (libraryName.shelves.fantasy[i].title === book) {libraryName.shelves.fantasy.splice(i, 1)}
  return `You have now checked out ${book} from the ${libraryName.name}`}
  }
  if(titlesOnShelf.includes(book) !== book) {
  return `Sorry, there are currently no copies of ${book} available at the ${libraryName.name
  }`
}
}




module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
