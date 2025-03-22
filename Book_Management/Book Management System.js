


function Book(title,author,year){
    this.title=title 
    this.author = author 
    this.year=year
}
Book.prototype.getSummary = function(){
    let v = `[${this.title}] by [${this.author}], published in [${this.year}]`
    return 
}
const Books = []
let book1 = new Book("jersey","gowtham",2016)
Books.push(book1)
// console.log(book1.getSummary())
let book2 = new Book("Jana Gana Mana","Tagore",1947)
Books.push(book2)
let book3 = new Book("Vande Mataram","Bankim Chandra Chattarji",1950)
Books.push(book3)
// console.log(book2.getSummary())
export {Books}