class Books {

    constructor(book, price, name) {
        this.book = book;
        this.price = price;
        this.name = name;
    }

    confirmBooks() {
        return `Thank you ${this.name}, you have just booked the book "${this.book}". ${this.bookCost()}`;
    }

    bookCost() {
        return `The book has a total value of €${this.price}. Payment made.`;
    }
}

var whatBook = new Books("Harry Potter", 35, "Wesley");
console.log(whatBook.confirmBooks());
