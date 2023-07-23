let wrapped = document.querySelector(".wrapped")

wrapped.scrollLeft = 150

// const carousel = setInterval(() => {
//     wrapped.scrollLeft += 150;
//     if(wrapped.scrollLeft > 600) {
//         wrapped.scrollLeft = 0;
//     }
// }, 2000);

// clearInterval(carousel)

wrapped.classList.remove("smooth");


let isdrag = false, totalpage, totalscrollLeft;

const draging = e => {
    if(!isdrag) return;
    wrapped.scrollLeft = totalscrollLeft - (e.pageX - totalpage);
}

const dragstart = e => {
    isdrag = true;
    totalpage = e.pageX;
    wrapped.classList.remove("interval")
    totalscrollLeft = wrapped.scrollLeft;
}

const dragend = () => {
    isdrag = false;
}

wrapped.addEventListener("mousemove", draging);
wrapped.addEventListener("mousedown", dragstart);
document.addEventListener("mouseup", dragend);


