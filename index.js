// Initiate Boofshelf
const bookshelfElement = document.querySelector(".books");
const bookshelf = new Bookshelf(bookshelfElement);
bookshelf.seed(bookData);

// -------------------------------Search & Reset----------------------------------------------
// Search by title or author
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-button");

// Enable search button to initiate search
searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const searchFn = (book) => book.title.toLowerCase().includes(query) || book.author.some((author) =>
    author.toLowerCase().includes(query));
    bookshelf.filterVisibleBooks(searchFn);
});
// // Enable enter key to initiate search
// searchInput.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//     const query = searchInput.value.toLowerCase();
//     const searchFn = (book) => book.title.toLowerCase().includes(query) || book.author.some((author) =>
//     author.toLowerCase().includes(query));
//     bookshelf.filterVisibleBooks(searchFn);
//   }
// });

// Reset search filter
const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
    const query = "";
    const searchFn = (book) => book.title.toLowerCase().includes(query) || book.author.some((author) =>
    author.toLowerCase().includes(query));
    bookshelf.filterVisibleBooks(searchFn);
    searchInput.value = "";
})

// -------------------------------Sort-----------------------------------------------
// Sort by title
const sortBy = document.querySelector(".sort-select");
sortBy.addEventListener("change", () => {
    const query = sortBy.value;
    let sortFn;

    if (query ==="title-alphabetical") {
        sortFn = (a, z) => a.title.localeCompare(z.title);
    } else if (query === "title-reverse-alphabetical") {
        sortFn = (a, z) => z.title.localeCompare(a.title);
    }

    bookshelf.sortVisibleBooks(sortFn);
});

// ----------------------------Add Book----------------------------------------------
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const subjectInput = document.querySelector(".subject-input");
const langInput = document.querySelector(".language-input");
const addBookBtn = document.querySelector(".add-book-button");

addBookBtn.addEventListener("click", () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const subject = subjectInput.value;
    const language = langInput.value;
    let newBook = new Book(title, [author], [subject], language);

    // Require title and author inputs
    if (title === "" || author === "") {
        alert("Please fill in the title and author fields.");
        return;
    }
    bookshelf.addBook(newBook);
    bookshelf.render();

    // Clear inputs
    let allInputs = document.querySelectorAll("input");
    allInputs.forEach((input) => input.value = "");
})

// Add Book visibility toggle
const revealAddBook = document.querySelector(".reveal-add-book")
const addBookForm = document.querySelector(".add-book");
addBookForm.style.display = "none";

revealAddBook.addEventListener("click", () => {
    addBookForm.style.display = (addBookForm.style.display === "none") ? "flex" : "none";
});