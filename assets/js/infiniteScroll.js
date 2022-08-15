const scrollCont = document.querySelector('.scroll-cont');
const scrollContent = document.querySelector('.scroll');
const scollBottom = document.querySelector('.scroll-bottom-border')


scrollCont.addEventListener("scroll", ()=>{
    let totalHeight= scrollContent.clientHeight;
    //console.log(scrollContent.clientHeight)
    console.log(scollBottom.getBoundingClientRect().top)
    if(scollBottom.getBoundingClientRect().top<=920){
        scrollContent.style.height = totalHeight + 2400 + "px";
        // const newDiv = document.createElement("div");
        // newDiv.setAttribute('class', 'scroll')
        // scrollCont.appendChild(newDiv)
    }
})