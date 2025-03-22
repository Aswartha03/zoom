import {Books} from  "./book.js"
let summaries = Books.map((ele)=>(ele.getSummary()))
console.log(summaries)
