'use strict';

//import { stderr } from "process";

// Q. 모의고사 
{
const answer=[1,2,3,4,5];
const student1=[1,2,3,4,5];
const student2=[2,1,2,3,2,4,5];
const student3=[3,3,1,1,2,2,4,4,5,5];
const result=[];
const a1=answer.filter((a,i)=>a===student1[i%student1.length]).length;
const a2=answer.filter((a,i)=>a===student2[i%student2.length]).length;
const a3=answer.filter((a,i)=>a===student3[i%student3.length]).length;

//console.log(Math.max(a1,a2,a3));
[a1,a2,a3].forEach((value,index)=>{
    value===Math.max(a1,a2,a3)?result.push(index):false;
});
//console.log(result)
}
// Q . 체육복 빌리기
{
const n=5;
const lost=[2,4];
const reserve=[1,3,5];

function solution(n,lost,reserve){
    var answer=0;
    const reserve1=reserve.map(x=>x+1);
    //console.log(reserve1);

    reserve1.forEach((x)=>{lost.includes(x);
        if(lost.includes(x)){answer+=1}
        //console.log(lost.includes(x)); 
    })
    //console.log(answer);
    return answer;
}
solution(n,lost,reserve);
}

// Two Sum
{
    //Input: nums = [2,7,11,15], target = 9
    //Output: [0,1]
    var twoSum=function(nums,target){
        let answer=[];
        // nums.forEach((v,i,array)=>{
        //     console.log(target-v,i);
        //     const result=array.indexOf(target-v,i+1);
        //     console.log(result);
        //     if(result>=1&&i!==result){
        //         answer.push(i);
        //         answer.push(result);
        //     }
        // })
        
        // for(const elem of nums){
            
        //     console.log(nums.indexOf(target-elem));
        // }
        return answer 
    }

    //console.log(twoSum([3,2,4],6));
    //console.log([1,2,3,4,5].slice(0,2));
}
