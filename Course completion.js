// Q: 1
// Online Learning Platform - Course Completion Analysis

// Problem Statement:
// An online learning platform tracks students' progress.

Requirements:

function  HOF(dict){
    let fil = dict.filter((ele)=>{
        let ans = (ele.completedLessons/ele.totalLessons)*100 
        if(ans>=50){
            return ele
        }
    })
    // console.log(fil)
    let per = fil.map((ele)=>{
        let ans =  (ele.completedLessons/ele.totalLessons)*100 
        ele["completionPercentage"]=ans 
        return ele
    })
    console.log(per)
    let avag  = per.reduce((a,b)=>{
        a =a+b.completionPercentage 
        return a
    },0)
    console.log("Average Completion percentage:",avag/per.length)
    let toppers = per.filter((ele)=>{
        return ele.completionPercentage>80
    })
    // console.log(toppers)
}


const studentsProgress = [
  { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
  { name: "Sita", completedLessons: 25, totalLessons: 50 },
  { name: "Manoj", completedLessons: 30, totalLessons: 60 },
  { name: "Pooja", completedLessons: 48, totalLessons: 50 },
  { name: "Anil", completedLessons: 15, totalLessons: 50 }
]
HOF(studentsProgress)
// Implement the following logic:
// Filter students who have completed at least 50% of the course.
// Map to calculate their completion percentage.
// Reduce to find the average completion percentage of all active students.
// Filter students who have more than 80% completion to get a list of top learners.
// Expected Output:
// List of active students with their completion percentage.
// The average course completion percentage.
// Submission Guidelines
// Implement the solution and ensure that it runs without errors.

// Include comments in your code to explain the logic and flow.

// Submit your GitHub directory Link.