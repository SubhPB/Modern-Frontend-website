function page3JS(){

    function textAnimation(){
        const page3 = document.querySelector('.page-3');
        const p3Spans = page3.querySelectorAll('.p3-span h2');
        const h1spans = page3.querySelectorAll('.p3-desc-h1 span')

        console.log(p3Spans);
        console.log(h1spans)
        gsap.to(p3Spans,{

            scrollTrigger: {
                trigger: p3Spans,
                scroller: 'body',
                toggleActions: 'restart pause resume pause', // Adjusted
                start: "bottom 85%", // Animation starts when the top of p2Spans hits the bottom of the viewport
                end: "bottom 0",
            },
            top: 0,
            delay: .5,
            duration: .5,
            ease: 'power2.inOut',
            stagger: .23,
        
        });


        gsap.to(h1spans,{

            scrollTrigger: {
                trigger: h1spans,
                scroller: 'body',
                toggleActions: 'restart pause resume pause',
                start: 'top bottom',
                end: 'bottom top',
            },
            top: 0,
            duration: .7,
            ease: 'power2.inOut',
            stagger: .05,
        })
    }

    textAnimation();
};

page3JS();