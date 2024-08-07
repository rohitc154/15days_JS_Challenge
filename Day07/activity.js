// -------------------:)Activity 01(:---------------------
const book1 = {
    title: 'Be You!',
    author: 'Rohit',
    year: '2021',
    bookMeth: function () {
        return `${this.title} is book's title and ${this.author} is book's author`
    }
    // yrUpdate: function (year) {
    //     this.year = year
    // }
}
const book2 = {
    title: 'Do it!',
    author: 'rohit',
    year: '2021',
}
// console.log(book);
// console.log(book.title);
// console.log(book.author);

// -------------------:)Activity 02(:------------------
// console.log(book.bookMeth(book.title, book.author));

// console.log(book.yrUpdate(20));
// console.log(book);

// -------------------:) Activity 03 (:------------------
// const library = {
//     name: "Scholar's Library",
//     books: [book1, book2],
// }
// for (let i = 0; i < 2; i++) {
//     console.log(library.books[i]);
// }
// for (let i = 0; i < 2; i++) {
//     console.log(`Library Name is : ${library.name}, It's book title is : ${library.books[i].title}`);
// }

// -------------------:) Activity 04 (:------------------
console.log(book1.bookMeth());

// -------------------:) Activity 05 (:------------------
// for (const key in book1) {
//     console.log(`Key : ${key} and it's value is ${book1[key]}`);
// }

// --------------------------------------------------------

console.log(Object.keys(book1)); // It returns an array
console.log(Object.values(book1));
