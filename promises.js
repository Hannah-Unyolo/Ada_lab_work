let internsip = false;

let ourPromise = new Promise((resolve,reject)=>{
   if(internsip) {
    resolve(`I made it`);

   }
   else{
    reject(`Iwill try harder`)
   }
})
ourPromise.then((response)=>{
    console.log({response});
    console.log(`I will continue working hard`);
})

.catch((error)=>{
    console.log({error});
    console.log(`I will continue applying for jobs`);
})

.finally(()=>{
    console.log(`I will be a Software Engineer`)
});

console.log({ourPromise});

async function myAkiraChixDream(){
    try{
        console.log(`This is my dream`);
        await ourPromise;
    }
    catch{
        console.log(`An error occured`)
    }

   
}

myAkiraChixDream();