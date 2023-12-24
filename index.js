// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
    return 0;
}
 function destructivelyPrependCat(name){
    cats.unshift(name);
    return 0;
 }

 function destructivelyRemoveLastCat(){
    cats.pop();
    return 0;
 }

 function destructivelyRemoveFirstCat(){
    cats.shift();
    return 0;
 }

 function appendCat(name){
    const copyOfCats = [...cats, name];
    return copyOfCats;
 }

 function prependCat(name){
    const copyOfCats = [name, ...cats];
    return copyOfCats;
 }

 function removeLastCat(){
    const copyOfCats = cats.slice(0, 2);
    return copyOfCats;
 }

 function removeFirstCat(){
    const copyOfCats = cats.slice(1);
    return copyOfCats;
 }