let sections = document.querySelectorAll('section')
// console.log(sections);
window.onscroll = ()=>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        // console.log('top',top);
        let offset = sec.offsetTop - 150;
        // console.log('offset',offset);
        let height = sec.offsetHeight;
        // console.log('height',height);

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate')
        }
        else{
            sec.classList.remove('show-animate')
        }
    })
}