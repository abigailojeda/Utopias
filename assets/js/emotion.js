const range = document.querySelector('.range');
const circle=document.querySelector('.circle-value');

range.addEventListener('change', ()=>{
console.log('value: ', range.value)





// var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
// console.log(color)
// console.log('valorrr: ',valor)

//circle.style.border="1px solid green"
})
let color=0;





function increment(){
    console.log(color)
    let valor= range.value
    range.value++
    switch(parseInt(valor)){
        case 0:
        color= 250;
        console.log(range.value);
        break;
        case 1:
        color= 170;
        console.log(color)
        break;
        case 2:
        color= 150;
        console.log('switch 2',range.value);
        break;
        case 3:
        color= 50;
        break;
        case 4:
        color= 85;
        break;
        default:
            console.log('joeeee')
            break
    }
    circle.style.backgroundColor="rgb(230,80,"+color+")"
}

// const sumar= document.getElementById('increment');
// console.log('dsfs',sumar)

function decrement(){
    range.value--
    console.log(color)
    let valor= range.value
    switch(parseInt(valor)){
        case 0:
        color= 250;
        console.log(range.value);
        break;
        case 1:
        color= 170;
        console.log(color)
        break;
        case 2:
        color= 150;
        console.log('switch 2',range.value);
        break;
        case 3:
        color= 50;
        break;
        case 4:
        color= 85;
        break;
        default:
            console.log('joeeee')
            break
    }
    circle.style.backgroundColor="rgb(230,80,"+color+")"
}