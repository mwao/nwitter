//console.log('Hello World'); 

function calculator(command,x,y){
    let a,b;
    a=Number(x);
    b=Number(y);
    switch(command){
        case 'add':
            return a+b;
        case 'substract':
            return Math.abs(a-b);
        case 'divide':
            return Math.max(a,b)/Math.min(a,b);
        case 'multiply':
            return a*b;
        case 'remainder':
            return Math.max(a,b)%Math.min(a,b);
        default:
            return false;
    }
}

console.log(calculator('remainder',3,6));


// Chapter 6. class vs. object 
// class : 관련있는 데이터를 묶어 놓은 것 (객체 지향)
// 캡슐화 ,다형성, 상속 .....
// 붕어빵을 만들 수 있는 틀 (template)

// object : 팥붕어빵, 크림붕어빵 ...
// instance of class 

//Javascript classses
// - syntactical sugar over 'prototype-based' inheritance

// 1. Class declarations

class Person{
    //constructor
    constructor(name,age){
        //fields
        this.name=name;
        this.age=age;
    }
    //methods
    speak(){
        console.log(`${this.name}:hello`);
    }
}

const ellie=new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();


// 2. Getter and Setter 
class User{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age; // this.age 부분은 메모리에 올라가있는 데이터를 호출하는게 아니라 getter를,
        //=age 부분은 setter를 호출하게됨. 
        //setter안에서 전달된 value를 this.age에 할당할때 메모리에 값을 업데이트하는게 아니라 setter를 호출하게 되는것 
        //getter, setter안에서의 변수는 다른 걸 써야 콜스택 사이즈 에러를 방지 
    }
    get age(){
        return this._age;
    }
    set age(value){
        if(value<0){
            throw Error('age can not be negative');
        }
        this._age=value;
    }
}

const user1= new User('Steve','Bob',-1); // age가 -1 인건 말이 안돼~ 


// 5. Inheritance (객체지향의 꽃~)
class Shape{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of `);
    }
    getArea(){
        return this.width*this.height;
    }
}

class Rectangle extends Shape(){
    draw(){
        super.draw();//부모 클래스의 함수도 사용하고 싶을때 
        console.log('i am rectangle');
    }
}
class Triangle extends Shape(){
    //overriding    
    getArea(){
        return (this.width*this.height)/2; 
    }
}

const nemo=new Rectangle(20,20,'blue'); 
nemo.draw();
const semo=new Triangle(20,20,'red');
semo.getArea(); // overriding : 필요한 함수만 재정의해서 사용 

// 6. Class cheking : instanceOf
nemo instanceof Rectangle // true
semo instanceof Triangle // true
nemo instanceof Object // true



