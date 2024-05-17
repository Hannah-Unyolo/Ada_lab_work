const personAge = (age)=>{
    if(age>=18){
        return "You are an aldut";
    }else if (age >= 13 && age <18){
        return "Your are a teenager";
    }else{
        return "You are a child"
    }
};

console.log(personAge(10));

//Switch
const greeting = (dayOfTheWeek)=>{
    switch(dayOfTheWeek){
        case '':
            console.log('Hello Monday');
            break;
            case 'Tuesday':
                console.log('Hello Tuesday');
                break;
                case 'Wenesday':
                    console.log('Hello Wenesday');
                    break;
                    case 'Thursday':
                        console.log('Hello Thursday');
                        break;
                        case 'Friday':
                            console.log('Hello Friday');
                            break;
                            case 'Saturday':
                                console.log('Hello Saturday');
                                break;
                                case 'Sunday':
                                    console.log('Hello Sunday');
                                    break;
                                    default:
                                        console.log('Not the days of the week');
    }
};

greeting('Monday');
greeting('When')