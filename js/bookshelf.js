// Bookshelf is an internal data structure that manages books.
class Bookshelf {
    constructor(htmlElement, books = []) {
        this.htmlElement = htmlElement;
        this.books = books;
        this.visibleBooks = books;
    }

    // Add book to bookself.
    addBook(book) {
        this.books.push(book);
    }

    // Render books array to htmlElement
    render() {
        const ul = document.createElement("ul");
        const books = this.visibleBooks.map((book) => book.render());
        ul.replaceChildren(...books);
        this.htmlElement.replaceChildren(ul);
    }

    // Load pre-existing book data.
    seed(data) {
        data.forEach((bookInfo) => {
            const book = new Book(
                bookInfo.title,
                bookInfo.author,
                bookInfo.subject,
                bookInfo.language
            );
            this.addBook(book);
        });

        this.render();
    } 

    // Filter visible books according to given criteria.
    filterVisibleBooks(criteriaFn) {
        this.visibleBooks = this.books.filter(criteriaFn);
        this.render();
    }

    // Sort visible books according to given comparison function.
    sortVisibleBooks(compareFn) {
        this.visibleBooks.sort(compareFn);
        this.render();
    }
}
