// there are two types of data types in javascript primitive or non primitive.
// In javascript datatypes means that a variable which type of data can be stored....

// Premitive Datatypes   
// Non-Primitive Datatypes

/* Primitive Datatypes    

 1. Number : it contains numeric value but it has some limit 2 to power 53
 2. String : it contains words or text but in ('' or "")
 3. Boolean : it contains true/false value
 4. Undefined : undefined value and undefined output always
 5. Null : its a standalone value this is used for give null value to a variable
 6. Symbol : its is use to give a unique value

*/


/*   Non-primitive Datatypes.

    1. Object : to make and object and used to contains one or many values
    2. Array : to contains many values 
    3. Function : when we have to do some work many times 

*/

// Now let see some examples....of primitve datatypes
// 1. Number 
console.log("these are the Primitve datatypes")

let Id = 858585
console.log("This is an example of Number :",Id)

// 2. String

const Name = "Aftab Khalil"
console.log("This is an example of string :", Name) 

// 3. Boolean

let isMarried = false
console.log("This is an example of Boolean :", isMarried)

// 4. Undefined
let Add
console.log("This is an example of Undefined :",Add)

// 5. Null 
const temp = null
console.log("This is an example of Null :",temp)




// Now let see some examples of Non-primitive datatypes

// 1. Object
const User = {
   uName:'Aftab',
   pNumber: 9525252525,
   married: false,
   age:undefined,
   business:null
}
console.log("this is the example of an Object in non primitive datatype:", User)


// 2. Array
const Colors =['Red','2255','Blue','White']
console.log("This is an example of an Array: ", Colors)

// 3. Function
function phone(){
    console.log("This is an example of function:samsung")
}
phone()
