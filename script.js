
new WOW().init();

gsap.registerPlugin(ScrollTrigger);

  const pinContainer = gsap.timeline()
            .fromTo(".detail.detail-2", { y: "100%" }, { y: "-22%", ease: "none" }) // in from left
            .fromTo(".detail.detail-3", { y:"-100%" }, { y: "54%", ease: "none" }); // in from right

        ScrollTrigger.create({
            animation: pinContainer,
            trigger: '.pin-container',
            pin: '.pin-container',
            pinSpacing: true,
            start: 'top 100',
            end: '+=1500',
            scrub: true,
        });










///scroll to top screan/////

let btn =document.getElementById(`btn`)

window.addEventListener(`scroll`,function(){

if(window.scrollY<606){
    btn.style. display=`none`;
}
else{
    btn.style.display=`block`;
}


})

btn.onclick=function(){

window.scrollTo({

    top:0,
    behavior:`smooth`

})

}





/* const tl=gsap.timeline({

scrollTrigger:{
    trigger:"#platter",
    scrub:true,
    start: ' 200',
    end: 'bottom 0',
}

});


tl.to("#platter", { y: 450 })
        .to("#platter",{x:1000})
        .to("#platter", { scale:11.4 })






        gsap.registerPlugin(ScrollTrigger);
gsap.to(".square",{ss
    x:1000,
    duration:3,
    scrollTrigger:{
        trigger: ".square",
        scrub:1,
        start:"center 70%",
        end: 0  ,
        markers:true,
        toggleClass:"red",
        pin:".square",
        pinSpacing:false,

    }
});
*/

