// Initiate Boofshelf
const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);

// Search by title.
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const searchFn = (book) => book.title.toLowerCase().includes(query) || book.author.some((author) =>
    author.toLowerCase().includes(query));
    bookshelf.filterVisibleBooks(searchFn);
});

// Sort
const sortBy = document.querySelector(".sort-select");

