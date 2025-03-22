function Book(title,author,isAvailable=true){
    this.title = title 
    this.author = author 
    this.isAvailable = isAvailable 
}
function Member(name){
    this.name= name 
    this.borrowedBooks = []
}
Member.prototype.borrowBook = function(book){
    if(this.borrowedBooks.length!=3){
        if(book.isAvailable==true){
            this.borrowedBooks.push(book.title)
            book.isAvailable=false
        }
        else{
            console.log("The book is already borrowed!!")
        }
    }
    else{
        console.log("Specific Member takes 3 books already.")
    }
}
function PremiumMember(name){
    let dict = new Member(name)
    dict.specialCollectionAccess = true 
    return dict
}
PremiumMember.prototype.borrowBook = function(book){
    if(this.borrowedBooks.length!=5){
        if(book.isAvailable==true){
            this.borrowedBooks.push(book.title)
            book.isAvailable=false
        }
        else{
            console.log("The book is already borrowed!!")
        }
    }
    else{
        console.log("Specific Member takes 5 books already.")
    }
    
}
let book1 = new Book("Jersey","Gowtham",true)
// console.log(book1)
let book2 = new Book("Harry Porter","Manesh",true)
// console.log(book2)
let book3 = new Book("Bahubali","Rajamauli",false)
// console.log(book3)
let book4 = new Book("Jana Gana Mana","Tagore",true)
// console.log(book4)
let book5 = new Book("Gandhiji","God",true)
// console.log(book5)
let book6 = new Book("Virat","Kohli",true)
// console.log(book6)
let Member1 = new Member("Aswartha")
let PremiumMember1 = new PremiumMember("Umar Farooq")
let PremiumMember2 = new PremiumMember("Sumanth")
Member1.borrowBook(book5) // Member1 takes one book 
Member1.borrowBook(book3) // output: The book is already borrowed 
Member1.borrowBook(book2) // member1 takes two books 
PremiumMember1.borrowBook(book2) // output: The book is already borrowed. because book2 is borrowed by member 1
PremiumMember1.borrowBook(book4) // premiumMember1 takes one book
console.log(Member1)  // output: object of member1 
console.log(PremiumMember1)// output: object of premiumMember1
PremiumMember2.borrowBook(book4) // output: The book is already borrowed . because book4 is borrowed by premiummember1
PremiumMember2.borrowBook(book6) // premiumMember2 takes one book 
console.log(PremiumMember2) // output:object of premiumMember2






















