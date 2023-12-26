function page2JS(){

    function textAnimation(){
        const p2Spans = document.querySelectorAll('.p2-span h2');
        const h1spans = document.querySelectorAll('.p2-desc-h1 span')

        gsap.to(p2Spans,{

            scrollTrigger: {
                trigger: p2Spans,
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

        console.log(h1spans);

        gsap.to(h1spans,{

            scrollTrigger: {
                trigger: h1spans,
                scroller: 'body',
                toggleActions: 'restart pause resume pause',
                start: 'top bottom',
                end: 'bottom top',
            },
            top: 0,
            duration: .6,
            ease: 'power2.inOut'
        })
    }

    textAnimation();
};

page2JS();