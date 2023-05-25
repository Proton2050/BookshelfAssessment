class Book {
    constructor(title, author, subject, language, comment) {
        this.title = title; //string
        this.author = author; //array
        this.subject = subject; //array
        this.language = language; //string
        this.comment = comment; //array
    }

    // Return List Item DOM element representing the book
    render() {
        // Display book information
        const book = document.createElement("li");
        book.innerText = `"${this.title}" by ${this.author}`;

        // Show comments icon
        const commentIcon = document.createElement("span");
        commentIcon.className = "material-symbols-outlined";
        commentIcon.innerText = "comment";

        // Comments Viewer 
        const commentViewer = document.createElement("section");
        commentViewer.className = "comment-viewer";
        commentViewer.innerText = "No comments yet.";
        commentViewer.style.display = "none";

        // Toggle comments visibility
        commentIcon.addEventListener("click", () => {
            commentViewer.style.display = (commentViewer.style.display === "none") ? "block" : "none";
            commentForm.style.display = (commentForm.style.display === "none") ? "block" : "none";
        });


        // Comment Form
        const commentInput = document.createElement("input");
        commentInput.className = "comment-input";
        commentInput.setAttribute("type", "text");
        commentInput.setAttribute("maxlength", "280");
        commentInput.setAttribute("placeholder", "Comment about this book");
        const commentBtn = document.createElement("button");
        commentBtn.className = "comment-button";
        commentBtn.setAttribute("type", "button");
        commentBtn.innerText = "Comment";
        const commentForm = document.createElement("form");
        commentForm.className = "comment-form";
        commentForm.append(commentInput, commentBtn);
        commentForm.style.display = "none";

        // Add comment to book object
        commentBtn.addEventListener("click", () => {
            if (!this.comment) this.comment = [];
            if (commentInput.value === "") {
                alert("No comment provided for submission.");
                return;
            }
            this.comment.push(commentInput.value);
            commentInput.value = "";
            console.log(this.comment);
            // re-render bookshelf?
        });

        book.append(commentIcon, commentViewer, commentForm);

        return book;
    }
}
