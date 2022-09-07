const anxietyBtn = document.querySelector('.anxiety-btn');
const anxietyCont=document.querySelector('.loading-cont');
const errorCont = document.querySelector('.error');
const previewCont = document.querySelector('.preview');
let cont=0;


anxietyBtn.addEventListener('click', ()=>{
//  cont= Math.random()*10000

if(cont<120000){
    cont+=2000;

}
else{
cont=0;
cont+=2000;
}
if(cont>2000){
    errorCont.setAttribute('class', 'error')
}
 anxietyCont.setAttribute('class', 'loading-cont')
 previewCont.setAttribute('class', 'none')

 const waitForStop = setTimeout(stopIt, cont)


})

function stopIt(){
    if(cont>2000){
        errorCont.setAttribute('class', 'error animate')
    }else{
        errorCont.setAttribute('class', 'error')
    }
    anxietyCont.setAttribute('class', 'none')
    
}