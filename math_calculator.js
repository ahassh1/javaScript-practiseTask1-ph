/***
Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding 

grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-40
***/

var fullMarks = 60;
console.log(fullMarks)
if(fullMarks >= 90 && fullMarks <=100){
    console.log("Grade is : A")
}
else if(fullMarks >=80 && fullMarks <=89){
        console.log("Grade is : B")
    }
else if(fullMarks >= 70 &&fullMarks <= 79){
        console.log("Grade is : C")
}
else if(fullMarks >=60 && fullMarks<=69){
    console.log("Grade is : D")
}
else {
    console.log("Grade is : F")
}