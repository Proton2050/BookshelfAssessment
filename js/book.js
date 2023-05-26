class Book {
    constructor(title, author, subject, language) {
        this.title = title; //string
        this.author = author; //array
        this.subject = subject; //array
        this.language = language; //string
        this.comment = []; //array
    }

    // Return List Item DOM element representing the book
    render() {
        // Display book information
        const book = document.createElement("li");
        book.innerText = `"${this.title}" by ${this.author} `;

        // Show comment icon
        const commentIcon = document.createElement("span");
        commentIcon.className = "material-symbols-outlined";
        commentIcon.innerText = "add_comment";

        // Comment Display 
        const commentDisplay = document.createElement("section");
        commentDisplay.className = "comment-viewer";

        // Create comment list
        const commentList = document.createElement("ul");
        this.comment.forEach((comment) => {
        const commentItem = document.createElement("li");
        const commentText = document.createTextNode(comment);
        commentItem.appendChild(commentText);
        commentList.appendChild(commentItem);
        commentDisplay.appendChild(commentList);
        });

        // Toggle comments visibility 
        commentIcon.addEventListener("click", () => {
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
            bookshelf.render();
            commentDisplay.style.display = "block";
            commentForm.style.display = "block";
        });

        book.append(commentIcon, commentDisplay, commentForm);

        return book;
    }
}
