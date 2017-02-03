import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const books = [
  {
    id: "My-experiments-with-Truth",
    title: "My experiments with Truth",
    author: "Mahatma M.K.Gandh",
    category: "Motivational"
  },
  {
    id: "Far-from-the-Madding-Crowd",
    title: "Far from the Madding Crowd",
    author: "Thomas Hardy",
    category: "Fiction"
  },
  {
    id: "The-Merchant-of-venice",
    title: "The Merchant of venice",
    author: "William shakespeare",
    category: "Fiction"
  },
  {
    id: "Time-Machine",
    title: "Time Machine",
    author: ["H.G. Wells", "Bayo Maborukoje"],
    category: "Fiction"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (book) => {
  return replaceAll(book.title, ' ', '-');
};

class BookApi {
  static getAllBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static saveBook(book) {
    book = Object.assign({}, book); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minBookTitleLength = 1;
        if (book.title.length < minBookTitleLength) {
          reject(`Title must be at least ${minBookTitleLength} characters.`);
        }

        if (book.id) {
          const existingBookIndex = books.findIndex(a => a.id == book.id);
          books.splice(existingBookIndex, 1, book);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new books in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          book.id = generateId(book);
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => {
          book.id == bookId;
        });
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default BookApi;
