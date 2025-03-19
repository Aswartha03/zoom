Q: 2
// Problem Statement:
// A movie streaming service wants to analyze its watchlist.

// Requirements:
function mobile(dict){
    let minToHour = dict.map((ele)=>{
        ele.watchTime = ele.watchTime/60
        let v = ele.watchTime 
        v = v.toFixed(2)
        ele.watchTime=Number(v)
        return ele
    })
    console.log(minToHour)
    let ratingabove = minToHour . filter((ele)=>{
        return ele.rating>7.5
    })
    // console.log(ratingabove)
    let totaltime = ratingabove.reduce((a,b)=>{
        a+=b.watchTime 
        return a
    },0)
    let value = Number(totaltime.toFixed(2))
    console.log( "Total time required to watch all high rated movies:",value)
    let final = []
    ratingabove.forEach((ele)=>{
        let ans = {Title:ele.title,Rating:ele.rating}
        final.push(ans)
    })
    // console.log(final)

}

const movies = [
  { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
  { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
  { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
  { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
  { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
]
mobile(movies)
// Implement the following logic:
// Map to convert watchTime from minutes to hours.
// Filter movies with a rating above 7.5.
// Reduce to find the total watch time of all highly-rated movies.
// Map to extract only the title and watch time of the best movies.
// Expected Output:
// List of highly-rated movies with watch time in hours.
// Total watch time of these movies.
// Submission Guidelines
// Implement the solution and ensure that it runs without errors.

// Include comments in your code to explain the logic and flow.

// Submit your GitHub directory Link.