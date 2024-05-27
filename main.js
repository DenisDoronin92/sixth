
// 1 задание
let b = 5
let a = +prompt('Введите значение');
switch (+a + b) {
    case 10:
        console.log('верно – да');
        break;
        case 20:
        console.log('не верно – нет');
        break
        default:
        console.log('не сработало');
        break;
}


// 2 задание

let i = prompt('Введите значение')

switch (+i) {
    case 1:
    case 2:
    case 3:   
    alert('Зима') 
        break;
        case 4:
        case 5:
        case 6:   
        alert('Весна') 
        break;
            case 7:
            case 8:
            case 9:   
            alert('Лето') 
            break;
                case 10:
                case 11:
                case 12:   
                alert('Осень') 
                break;


    default:
        alert('Нет такого значения');
        break;
}


// 3 задание

let c;
let v = 0;
let o = null;

alert(c ?? v ?? o)
