console.log("hello world");  // output statement
const profile = { 
    name : "shivaram",
    id : 1023334,  //profile is a object which has different values 
    followers : 121,    // example id , name
    following : 140, // id,name are called keys and the numbers are values of that key 
    posts : 1,
};

console.log("the name is", profile["name"]); //two ways to print values of object
console.log("the id is", profile.id);                           

let cam = 23;
console.log(cam);

if(cam % 2 == 0)    // if else example
{
    console.log(cam, "is even");

}
else
{
    console.log(cam," is odd");
}
let s=22;
let sa=23;
console.log(s , sa);
console.log(s ,">=", sa, "is" ,s>=sa);

s==sa ?  console.log("yes") : console.log( "no");  //ternary operator

 {
alert("hello.");  // one time pop up on the website
}

let a;   //undefined variable
/*
a = prompt("whats up!"); // pop up and input box will appear on the website
console.log(a);

// program to identify input as odd or even number using prompt
let num = prompt("Enter any number: ");
if(num%2 == 0)
{
    console.log(num,"is even");
}
else {
    console.log(num,"is odd");
} 
*/
//for loop exmps
for(let i=0;i<=5;i++)
  // for loop syntax : for (initialize ; test condition ; increment/decrement)
{
    console.log("abc");
} 
// for-of loop is used to print every value of string and array seperately

/* syntax of for-of loop
 for(let value of stringvariable)
 {
    console.log(variable);
 }
 */
// ex of for-of
// print all  letters in the word and give size of the string
let str1 = "helloworld";
let size = 0 ;
for(let i of str1)
{
    console.log("i=",i);
    size++;
}

console.log("size of the string =",size);

// for-in loop used for only objects same as for-of loop
// it gives the keys and their values
// syntax for for-in loop
/* 
for(let key in objectvariable)
{
    console.log(key,"=", objectvariable[key]);
}
*/
const profile1 = { 
    name : "shivaram",
    id : 1023334,  //profile is a object which has different values 
    followers : 121,    // example id , name
    following : 140, // id,name are called keys and the numbers are values of that key 
    posts : 1,
};

//example of for-in loop

for(let key in profile1)
{
    console.log(key,"value =",profile1[key]);
   
}

// BUILD A GAME THAT ASK USER TO GUESS THE NUMBER OR CHARACTER.

let given = 19;

let guess = prompt("guess the number:");

console.log(guess);
 
while(guess != given)
{
    guess = prompt("You gussed wrong number, guess again:");
}

if(guess == given )
{
    console.log("the guessed number is correct",guess);
}
