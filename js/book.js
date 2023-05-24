class Book {
    constructor(title, author, subject, language) {
        this.title = title;
        this.author = author;
        this.subject = subject;
        this.language = language;
        this.isFavorite = false;
    }

    // Return List Item DOM element representing the book
    render() {
        const book = document.createElement("li");
        book.innerText = `"${this.title}" by ${this.author}`;

        return book;
    }
}
