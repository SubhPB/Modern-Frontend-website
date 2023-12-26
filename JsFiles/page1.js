
function page1JS(){
    function navAnimation(){
        const navH3s = document.querySelectorAll('.nav-h3');
    
        console.log(navH3s.children)
        let t1 = gsap.timeline();
    
        t1.to(navH3s[0],{
            left: 0,
            duration: 1,
            ease: 'power1.in',
            opacity: 1,
        })
        gsap.to(navH3s[1],{
            right: 0,
            duration: 1,
            ease: 'power1.in',
            opacity: 1
        })
        
    };
    
    navAnimation();
    
    function cursorAnimation(){
    
        const page1 = document.querySelector('.page-1');
        const cursor = document.getElementById('crsr-1');
        
        document.addEventListener('mousemove',(e) => {

            gsap.to(cursor,{
                opacity: 1,
                top: (e.pageY - cursor.offsetHeight/3 ) + 'px',
                left: (e.pageX -  cursor.offsetWidth/3 ) + 'px'
            });

            page1.addEventListener('mouseenter', (e) => {
                gsap.to(cursor,{
                    scale: 1,
                    duration: 1,
                    ease: 'power.out'
                })
            });

            page1.addEventListener('mouseleave', (e) => {
                gsap.to(cursor,{
                    scale: 0,
                    duration: 1,
                    ease: 'power2.inOut',
                })
            });            
        });       
    };
    
    cursorAnimation()
    
};


page1JS();