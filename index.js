// Code your solutions in this file

const arrNames = ["stela", "arbi", "mami"];
function writeCards(arrNames,name){
const newArray=[];
for(let i=0;i<arrNames.length;i++){
    newArray[i]=`Thank you, ${arrNames[i]}, for the wonderful ${name} gift!`
}
return newArray;
}

function countDown(num){
    let i=num;
    while(i>=0){
        console.log(i);
        i--;
    }

}