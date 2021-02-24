'use strict';

// Q1 . make a string out of array
{
    const fruits=['apple','banana','orange'];
    console.log(fruits.join()); //apple,banana,orange
    console.log(fruits.join('')); // applebananaorange
}
// Q2 . make an array out of a string 
{
    const fruits='🍎,🥝,🍌,🍒';
    const result=fruits.split(',',3); //["🍎", "🥝", "🍌"]
    console.log(result);
}
// Q3 . make this array look like this : [5,4,3,2,1]
{
    //const array=[1,2,3,4,5];
    const array=[5,4,3,2,1]  // result=[1,2,3,4,5]
    const result=array.reverse(); // .reverse() 는 return 값으로 리버스된 배열을 반환 
    console.log(result);
    console.log(array); // 배열 자체도 순서 변화 
}
// Q4 . make new array without the first two elements
{
    //splice : 배열 자체를 바꿔버림 
    let array=[1,2,3,4,5];
    const newarray=array.splice(0,2);
    console.log(newarray);// [1,2]
    console.log(array); //[3,4,5]
    //slice : 배열 중 일부를 반환 , slice(시작인덱스, 끝인덱스-1) 
    array=[1,2,3,4,5];
    const result=array.slice(2,5);
    console.log(result); // [3,4,5]
    console.log(array); //[1,2,3,4,5]
}
////Class 예제 
class Student{
    constructor(name,age,enrolled,score){
        this.name=name;
        this.age=age;
        this.enrolled=enrolled;
        this.score=score;
    }
}
const students=[
    new Student('A',29,true,45),
    new Student('B',28,false,80),
    new Student('C',30,true,90),
    new Student('D',40,false,66),
    new Student('E',18,true,88), 
];

// Q5. find a student with the score 90
{
    // array.find(callbackFn) : 맞는 값을 찾을 때까지 도는 것 ,,,,
    const result=students.find(function(student,index){
       console.log(student.score,index);
       return student.score===90;
    });
    console.log('Q5(find)',result);

    const result_simple=students.find((student)=>student.score===90);
    console.log(result_simple);
}
// Q6 . make an array of enrolled student 
{
    //// 와타시의 답변은 forEach .... 
    const result=[];
    //fruits.forEach((fruit,index)=>console.log(fruit));
    students.forEach((student)=> student.enrolled===true?result.push(student):false
    //console.log(student.enrolled,index)
    );
    console.log("result : ",result);
    
    //// filter 함수 
    //const answer=students.filter((student)=>student.enrolled===true);
    const answer=students.filter((student)=>student.enrolled); // === true 안해도 true인것만 받아옴
    console.log("Q6(filter)",answer);
}
// Q7 . make an array containing only the students' scores 
// result should be : [45,80,90,66,88]
{
    //// 와타시의 답은 forEach ... 끔찍히도 아끼는 ....
    const result=[];
    students.forEach((student)=>result.push(student.score));
    console.log(result); 
    
    //// map 함수 : 배열 안 요소를 이용해서 원하는 함수로 가공하고 싶을 때 ...
    const answer=students.map((student)=>student.score);
    console.log("Q7(map):",answer);
}
// Q8 . check if there is a student with the score lower than 50 
{
    //find 는 조건에 맞는 배열의 요소를 return 함
    let result=students.find((student)=> student.score<50);
    console.log(result);

    // some : callbackFn 에 맞는게 있는지 없는지 확인 
    result=students.some((student)=>student.score<50); // score 가 50미만인 학생이 존재하면 true를 출력 
    console.log("Q8(some)",result);

    // every : 모든 학생들을 검사 
    result=!students.every((student)=>student.score>=50); // score 가 모두 50이상이면 true를 출력 
    console.log("Q8(every)",result);
}
// 09. compute students' average score
{
    // 와타시는 여전히 forEach....
    let result=0;
    students.forEach((student)=>result+=student.score);
    console.log(result/students.length);
    
    // reduce : 누적된 값을 반환 함 
    /*result=students.reduce((prev,cur)=>{
        console.log('----------');
        console.log('prev',prev);
        console.log('cur',cur.score);
        return prev+cur.score;
    },0)/students.length;*/
    result=students.reduce((prev,cur)=>prev+cur.score,0)/students.length;
    console.log('Q9(reduce)',result);
}
// Q10 . make a string containing all the scores
// result should be : '45,80,90,66,88'
{
    let result=students.map((student)=>student.score).join(',');
    console.log(result); //  '45,80,90,66,88'

    //응용 : 점수가 50점 이상인 애들만 골라줘 
    result=students.map((student)=>student.score) // [45, 80, 90, 66, 88]
    .filter((value)=>value>50) // [80,90,66,88]
    .join(','); // '80,90,66,88'
    console.log('Q10',result); // '80,90,66,88'
}
// Bonus. do Q10 sorted by ascending order 
// result should be : '45,66,80,88,90'
{
    const result=students.map((student)=>student.score).sort().join(',');
    console.log(result);
}
