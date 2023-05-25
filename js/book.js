class Book {
    constructor(title, author, subject, language) {
        this.title = title; //string
        this.author = author; //array
        this.subject = subject; //array
        this.language = language; //string
        this.isFavorite = false; //boolean
    }

    // Return List Item DOM element representing the book
    render() {
        const book = document.createElement("li");
        book.innerText = `"${this.title}" by ${this.author}`;

        return book;
    }
}
