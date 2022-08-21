const animateCont = document.querySelector('.animation-cont');
const dopamineBtn = document.querySelector('.dopamine-btn');
const dopamineCont = document.querySelector('.dopamine-cont');

dopamineBtn.addEventListener('click', ()=>{
    const clone = animateCont.cloneNode(true);
    clone.setAttribute('class', 'animation-cont animate');
    dopamineCont.appendChild(clone);

    const animates = document.querySelectorAll('.animate');

    animates.forEach(anime =>{
        console.log(anime.offsetHeight )
    })

})