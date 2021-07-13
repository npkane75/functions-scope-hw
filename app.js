
//1. Verbal Questions
// parameters are the names within the function and the arguments is called when the function is ivoked.
// console will let you see the outputt in order to test the function, Return will tell the function when to conplete.
// the implication of the return is tha the function can set the parameter information for that one instace on the fucntion

//  const wordIsPaindrome = checkPalindrome("Radar");

//  console.log(wordIsPaindrome); 
//  => true


// 2.  Palindrome

function checkPalindrome(_firstWord) {
 console.log('this word is not palindrome ' + _firstWord);
 }

checkPalindrome('cat');

// // 3. checkForStuedent function.
//corrected code after Henry's explaination.

function checkForStudent(name, students) {
    console.log(name)
    console.log(students)
    //return undefined
    for(let i = 0; i < students.length; i++) {
        if (students[i] === name) {
            return true
        }
    }
    }
    const studentIncluded =  checkForStudent('Sally', ['Sally', 'Kyle']);
    
// checkForStudent();


// 4. Write the `sumarrray ` that takes an array as an arugument



function sumArray(newArray) {

let sum = 0
for (let i=0; i < newArray.length; i++){
sum += (newArray[i]);
console.log(sum);
}
}
sumArray(1,2,3,4,5,6); 



//explained by henry
// functions have a "return" value
//A funtions INPUT is the 'arguemnt'
//a functions OUTPUT is the return value.

//PSUEDOCODE
//Step 1 loop over the student array
//step 2 Compare the input name against the current student

function checkForStudent(name, students) {
console.log(name)
console.log(students)
//return undefined
for(let i = 0; i < students.length; i++) {
    if (students[i] === name) {
        return true
    }
}
}
const studentIncluded =  checkForStudent('Sally', ['Sally', 'Kyle']);
