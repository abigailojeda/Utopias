const scrollCont = document.querySelector('.scroll-cont');
const scrollContent = document.querySelector('.scroll');
const gallerys = document.querySelectorAll('.gallery-cont');

scrollCont.addEventListener("scroll", ()=>{
    let totalHeight= scrollContent.clientHeight;
    console.log('tope: ', gallerys[0].getBoundingClientRect().top)
    //console.log(scrollContent.clientHeight)
    // console.log(scollBottom.getBoundingClientRect().top)
    if(gallerys[0].getBoundingClientRect().top<=-904){
        scrollContent.style.height = totalHeight + 2400 + "px";
        const node= scrollContent.getElementsByClassName('gallery-cont')[0];
        const clone = node.cloneNode(true);
        console.log(node)
       // console.log(clone)
        // const newDiv = document.createElement("div");
        // newDiv.setAttribute('class', 'scroll')
        scrollContent.appendChild(clone)
    }
})