const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);

const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");

// Search by title.
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const searchFn = (book) => book.title.toLowerCase().inclues(query);
    bookshelf.filterVisibleBooks(searchFn)
});

const sortBy = document.querySelector(".sort-select");

