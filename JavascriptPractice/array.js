'use strict';

// Array ❤️

// 1. Declaration
const arr1=new Array();
const arr2=[1,2];

// 2. Index position 
const fruits=['🍓','🍌'];
console.log(fruits);
console.log(fruits[0]); // array[index] 하면 접근 가능 
console.log(fruits[fruits.length-1]);

// 3. Looping over an array 
//console.clear();

// (1) for Loop 
for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
// (2) for of
for (let fruit of fruits){
    console.log(fruit);
}
// (3) foreach
fruits.forEach(function(fruit,index,array){
    console.log(fruit,index,array);
});

fruits.forEach((fruit,index)=>console.log(fruit));

// (4) Addition , delete, copy
// push() : 뒤로 삽입 , pop() : 뒤로 빼기 
fruits.push('🍋');
console.log(fruits);//["🍓", "🍌", "🍋"] 
fruits.pop();
console.log(fruits);//["🍓", "🍌"] 

//unshift() : 앞으로 삽입 , shift() : 앞으로 빼기  ==> ★★★얘는 진짜 느려★★★
fruits.unshift('🍒');
console.log(fruits); // ["🍒", "🍓", "🍌"]
fruits.shift();
console.log(fruits); // ["🍓", "🍌"]

//splice : index 로 삭제하기 
fruits.splice(1,1); // splice(시작 인덱스,지울 개수);
fruits.splice(1,1,'1','2'); // splice(시작 인덱스,지울 개수, 지우고 추가할 원소);
console.log(fruits); //["🍓", "1", "2" ]

// combine two array 

const fruits2=['사과','배']; //["🍓", "1", "2", "사과", "배"] 
const mixfruits=fruits.concat(fruits2); 
console.log(mixfruits); 


// 5. Search
// .indexof()  : 중복되면 첫번째 인자를 돌려줌 
// .includes() 
// .lastIndexof() : 가장 마지막 인자를 돌려줌 