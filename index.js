
/*Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
*/

let hacker1 = "John";
console.log(`the driver name is ${hacker1}`);

let hacker2 = "Joanna";
console.log(`the navigator name is ${hacker2}`);


/*
Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.

*/

if (hacker1.length > hacker2.length) {
  console.log(`the driver has the longest name, it has ${hacker1.length}  characters.`);
} else if (hacker1.length < hacker2.length) {
  console.log(`the driver has the longest name, it has ${hacker2.length}  characters.`)
}
/*

Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?

*/

let reverseNameWithSpace = '';
let reverseName = '';


for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseNameWithSpace += hacker1[i] + ' ';
  reverseName += hacker1[i];
}

console.log(reverseNameWithSpace.toUpperCase());
console.log(reverseName);


if (hacker1 < hacker2) {
  console.log(hacker1 + ' go first');
} else if (hacker1 > hacker2) {
  console.log(hacker2 + ' go first');
} else {
  console('What?! You both have the same name?')
}

// Bonus

/*Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nunc elit, semper quis euismod sit amet, facilisis non est. Nam arcu ipsum, consequat ut placerat ut, imperdiet eu nisl. Vivamus dui lorem, viverra a urna eu, laoreet porttitor nunc. Fusce viverra eleifend nibh, nec condimentum ligula efficitur non. Sed porttitor arcu tortor, id lobortis leo gravida non. Sed eget luctus mauris. Nulla magna purus, dignissim sed dolor eu, fringilla finibus velit. Vestibulum vulputate nibh non dui mollis, at pellentesque augue posuere. Etiam rhoncus dictum nibh nec tincidunt. Cras laoreet faucibus quam. Proin suscipit, erat vitae pulvinar vestibulum, neque dolor viverra ligula, at tincidunt nulla ante sed est. Donec tincidunt mauris mauris, eu accumsan libero consequat quis. Cras in nibh varius, mattis sem quis, blandit velit. Nulla facilisi.Cras congue, risus sit amet aliquam tincidunt, ex ante gravida augue, sed vestibulum nisl purus at lorem. Ut odio massa, congue luctus pulvinar ac, condimentum quis nulla. Nulla consequat vel dui sit amet condimentum. Cras id volutpat sapien, mollis condimentum ante. Donec sagittis lacinia urna, vel finibus arcu aliquet ac. Maecenas accumsan magna diam, a auctor mauris pulvinar nec. Sed in dolor sapien. Nunc consectetur velit a enim consectetur blandit. Ut varius dignissim lacus in placerat. Etiam sapien tortor, accumsan feugiat odio ac, ornare iaculis sapien. Etiam tincidunt risus euismod urna fringilla mattis. Aliquam convallis aliquet augue, ac cursus lacus dapibus sit amet.Mauris lacus dolor, egestas at fermentum vitae, accumsan sit amet elit. Nam nec lorem faucibus, fringilla elit ut, elementum enim. Fusce tortor quam, volutpat nec facilisis vel, eleifend non urna. Suspendisse potenti. Nullam suscipit feugiat neque, vehicula placerat velit imperdiet sed. Donec et sem dolor. Etiam sit amet eleifend est. Pellentesque finibus leo ut metus lacinia placerat. Vestibulum commodo sapien a tellus vestibulum, ut placerat dolor vulputate. In vel mi fringilla, pharetra ante vel, dictum velit. Mauris quis accumsan turpis, ac vulputate nisl. Nunc dolor nisl, auctor id eros sit amet, semper vehicula tellus. Nunc ultricies mi ut vehicula ornare. Integer faucibus et turpis a consectetur. Morbi eget iaculis metus, congue efficitur erat. Duis et lorem ex."
console.log('the number of words is ' + longText.length);
let numberOfEt = 0;
for(let i=0; i<longText.length; i++){
    if(longText[i]==='e' && longText[i+1]==='t'){
        numberOfEt ++;
    }
}
console.log('the number of Latein et appears ' + numberOfEt +' times');



/*
Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
*/


let alphabetStr = '';
for (let p = 0; p < 26; p++) {
    // Adding uppercase letter
    alphabetStr += String.fromCharCode(65 + p);
    // Adding lowercase letter
    alphabetStr += String.fromCharCode(97 + p);
}


function phraseToCheck(text){
    
    let checkedText = ''
    for(let j = 0; j <text.length; j++){
        for(let k= 0; k<alphabetStr.length; k++){
            if(text[j]==alphabetStr[k]){
                checkedText +=text[j];
            }
        }

    }

    let reversedText = '';

    for(let num = checkedText.length-1; num>=0; num--){
        reversedText += checkedText[num];
    }
    

    if(reversedText.toUpperCase()==checkedText.toUpperCase()){
        return 'it is a Palindrome';
    }else{ return 'not a Palindrome'; }

}

let text = "A man, a plan, a canal, Panama!";

console.log(phraseToCheck(text));