class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error("Not enough space in the collection.");
        }
        this.books.push({ bookName, bookAuthor, payed: false, });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
    payBook(bookName) {
        let cB = this.books.find(b => b.bookName === bookName);
        if (!cB) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        if (cB.payed) {
            throw new Error(`${bookName} has already been paid.`);
        }
        cB.payed = true;
        return `${bookName} has been successfully paid.`;
    }
    removeBook(bookName) {
        let cB = this.books.find(b => b.bookName === bookName);
        if (!cB) {
            throw new Error("The book, you're looking for, is not found.");
        }
        if (!cB.payed) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }
        this.books = this.books.filter(b => b.bookName !== bookName);
        return `${bookName} remove from the collection.`;
    }
    getStatistics(bookAuthor) {
        if (!bookAuthor) {
            let res = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];
            this.books = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            this.books.forEach(b => {
                res.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`);
            })
            return res.join('\n');
        }

        let cA = this.books.find(b => b.bookAuthor === bookAuthor);
        if (!cA) {
            throw new Error(`${bookAuthor} is not in the collection.`);
        }

        return `${cA.bookName} == ${cA.bookAuthor} - ${cA.payed ? 'Has Paid' : 'Not Paid'}.`;
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));

