//For loop
const multiply = (num) =>{
    let newArray= [];

    for(let i = 0; i<num.length; i++){
        const multiplyByTwo = num[i]*2;
        newArray.push(multiplyByTwo);
    }
    return newArray;
}
console.log(multiply([2,3,4,5,6,7,8]));

//for of loop
const totalSum = (numbers) => {
    let sum = 0;
    for(let num of numbers){
        sum+= num
    }
    return sum
}
console.log(totalSum([2,3,4,5,6,7]))

//while loop (for you to stop it you have to put if function)
const students =(studentNames) =>{
    while(studentNames.length >2){
        console.log('Teach students');
        studentNames.pop();
        if(studentNames.length===2){
            console.log('You are left with two students');
            //You can use break to stop
        }
    }
};
students(['Ema','Eve','Ann','Judith'])

//Do while
const kickBall=(leg)=>{
    do{
        console.log('Kick the ball');
    }while(leg)
};
kickBall(false)

//Switch Statement
