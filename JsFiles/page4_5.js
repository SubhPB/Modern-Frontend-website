
function page4JS(){

    const page4 = document.querySelector('.page-4');
    const parent = page4.querySelector('.roll-div');
    const seats = parent.querySelectorAll('.seats');
    const numbers = seats[0].querySelectorAll('h2');
    const sech2 = seats[1].querySelectorAll('h2');

    gsap.to(numbers,{
        scrollTrigger: {
            trigger: parent,
            scroller: 'body',
            start: 'top 60%'
        },
        top: '-6.6vmax',
        duration: 1.5,
        delay: .6,
        ease: 'power.inOut',
        onComplete: () => {
            gsap.to(sech2,{
                top: '-2.1vmax',
                duration: .5,
                ease: 'power2.in'
            })  
        }  
    })

};

page4JS();

function page5JS(){

    const page5 = document.querySelector('.page-5');


    const rawText = "Data matters, yet it's emotion that drives buying decisions. We don't believe in 'one size fits all.' Instead, we collaborate closely with our clients to craft unique brand experiences that resonate with their audiences and boost their KPIs";
    const textList = rawText.split(' ');
    const p3Desc = document.createElement('div');
    p3Desc.classList.add('p3-desc');
    
    // -- appending --

    textList.forEach( text => {

        const h1desc = document.createElement('div');
        h1desc.classList.add('p3-desc-h1');
    
        const h1span = document.createElement('span');
    

        h1span.innerText = text
        h1desc.appendChild(h1span);
        p3Desc.appendChild(h1desc);
    });

    page5.appendChild(p3Desc);

    function textAnimation(){
        const p3Spans = page5.querySelectorAll('.p3-span h2');
        const h1spans = page5.querySelectorAll('.p3-desc-h1 span')

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

page5JS();