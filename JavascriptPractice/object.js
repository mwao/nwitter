//Objects 

// 1. Literals and Properties 
// object={ key : value } 
const name='jjungss';
const age=4;
print(name,age);
function print(name,age){
    console.log(name);
    console.log(age);
}
// 변수가 늘어날 수록 받을 데이터 (인자)의 개수가 늘어나는 것이 문제 
function objectprint(person){
    console.log(person.name);
    console.log(person.age);
    console.log(person.address);
}
const obj1={}; // object literal
const obj2=new Object(); // object constructor 

const person={name:'jjungss',age:4,address:"Seoul"};

objectprint(person);
//javascript 가 dynamic runtime이라서 응용프로그램이 동작하고 있을때 추가 가능 
//아래와 같이 속성을 나중에 추가할 수 있음 
person.hasJob=true;
console.log(person.hasJob);
//나중에 삭제할 수도 있음 
delete person.hasJob;

// 2. Computed properties 
console.log(person.name);
console.log(person['name']); //key 는 무조건 string으로 지정해서 받아와야함 , 언제 어떤 키를 받아와야될지 모를때 
console.log(person.hasJob);

// ex) 동적으로 키의 value값을 받아와야할 때 
function printValue(obj,key){
    console.log(obj.key); //오류 
    console.log(obj[key]); 
}


// 3. Property value shorthand 

// class 와 비슷한 템플릿 역할을 함 
function makePerson(name,age){
    return{
        name:name,
        age:age,
    };
}

// 4. Constructor function
function Person(name,age){
    //this={}
    this.name=name;
    this.age=age;
    // return this; 
}

// 5. in operator : key 가 있는지 없는지 확인 
console.log('name' in person); //true
console.log('age' in person); //true 
console.log('marrage' in person); //false
//console.clear();


// 6. for ..in vs. for ..of 
//for (key in object)
for(key in person){
    console.log(key);
}

//for (value of iterable)
const array=[1,2,3,4,5];
for (let i=0;i<array.length;i++){
    console.log(array[i]);
} // 이건 구린 방법

for(value of array){
    console.log(value);
}// 굿굿

// 7. cloning 
const user={name:'ellie',age:5};
const user2=user;
user2.name='coder';
console.log(user); // {name: "coder", age: 5}

//old way 
const user3={};
for(key in user){
    user3[key]=user[key];
}
console.log(user3);//{name: "coder", age: 5}

//
const user4={};
Object.assign(user4,user); //{name: "coder", age: 5}

const user5=Object.assign({},user); //{name: "coder", age: 5}

const fruit1={color:'red'};
const fruit2={color:'blue',size:'big'};
// 겹치면 나중에 assign 된 파라미터가 할당된다 
const mixed=Object.assign({},fruit1,fruit2); // {color:'blue',size:'big'}; 

