const cup ={
    color:"red",
    size:"small",
    texture:"smooth",
    shape:"round",
    functionality:{
        drinktype:"tea",
        temperature:"hot"
    },
    drink:function(){ //you can use drink: () => {}  you dont need to put this , put the object's name 
        console.log('use me to drink');
        console.log(`My main purpose is to drink ${this.functionality.temperature} ${this.functionality.drinktype}`)
    }
};
console.log({color: cup.color});
console.log("size",cup.size)
console.log('temperature',cup.functionality.temperature)
console.log('texture',cup["texture"]);

cup.model = 'glass';
console.log({cup});

delete cup.model
console.log({cup});
cup.color = 'green';
console.log({cup});

cup.drink();


const keys = Object.keys(cup)
console.log({keys});

const values = Object.values(cup);
console.log({values});


Object.keys(cup).forEach(item =>{
    console.log({key:item, value:cup[item]});
})


const loop = Object.keys(cup).map(item =>{
    return ({key:item, value:cup[item]});
})

console.log({loop});