

gsap.from(".img1", {
    duration: 1,
    opacity:0,
    delay:0.4,
    y:50
}
)

gsap.from(".img2", {
    duration: 1,
    opacity:0,
    delay:0.4,
    x:50
}
)
gsap.from(".img3", {
    duration: 1,
    opacity:0,
    delay:0.4,
    y:-50
}
)

gsap.from(".main h1", {
    duration: 1,
    opacity:0,
    delay:1,
 
}
)

gsap.from(".page2 h5, .page2 h1, .page2 .about-us",{

    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:".page2 h5",
        scroller:"body",
        start:"top 60%",
        
    }
})