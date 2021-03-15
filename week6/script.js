alert("Hello World");
function sayHello(){
    console.log("Hello World!")
}
sayHello()

let nouns=["cat","dog","rabbit","horse","fish"];
let verbs=["fly","run","swim","sleep","eat"];
let adjectives=["happy","sad","sick","tired","exciting"];

let noun = nouns [Math.floor (Math.random()*nouns.length)];
let verb = verbs [Math.floor (Math.random()*verbs.length)];
let adjective = adjectives [Math.floor (Math.random()*adjectives.length)];

//let sentence="My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky."
//console.log(sentence)
console.log("My " + noun + " leaps " +adjective+ " when I "+verb+" a rainbow in the sky.")