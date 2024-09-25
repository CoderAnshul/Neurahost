const textElement = document.getElementById('text');



var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);


const navElements = document.querySelectorAll('#navbar img, #navbar .navButtons button');

gsap.from(navElements,{
    y:-100,
    opacity:0,
    duration:1,
    stagger:0.2
})

tl.from(".landingPageLeft h5",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:0.2
})
tl.from(".landingPageLeft h1",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:0.2
})
tl.from(".landingPageLeft p",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:0.2
})


const box = document.querySelector('.decorBoxOne');

var tl2 = gsap.timeline();


tl2.from(".landingPageRight",{
    x:100,
    opacity:0,
    duration:1,
    stagger:0.1
})
tl2.from(box,{
    opacity:0,
    x: 300,  
        duration: 2, 
        ease: "bounce.out",
})



gsap.from(".featBox",{
    y:50,
    opacity:0,
    duration:0.9,
    stagger:0.2,
    scrollTrigger:{
        trigger:".featBox",
        // markers:true,
        start:"top 100%",
        end:"top 80%"
    }
})
gsap.from(".mentorLeft",{
   x:-50,
    opacity:0,
    duration:0.9,
    stagger:0.2,
    scrollTrigger:{
        trigger:".mentorLeft",
        // markers:true,
        start:"top 70%",
        end:"top 50%"
    }
})
gsap.from(".mentorRight",{
    x:50,
    opacity:0,
    duration:0.9,
    stagger:0.2,
    scrollTrigger:{
        trigger:".mentorRight",
        // markers:true,
        start:"top 70%",
        end:"top 50%"
    }
})



gsap.from(".aboutleft",{
    x:-50,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:".aboutleft",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})

gsap.from(".about-right",{
    x:50,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:".about-right",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})





gsap.from(".benefitLeft h1",{
    x:-50,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:".benefitLeft h1",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})
gsap.from(".benefitLeft p",{
    x:-50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".benefitLeft p",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})
gsap.from(".benefitLeft .checklist",{
    x:-50,
    opacity:0,
    duration:1.1,
    scrollTrigger:{
        trigger:".benefitLeft .checklist",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})
gsap.from(".benefitright .benefitBlock",{
    x:50,
    opacity:0,
    duration:1.1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".benefitright .benefitBlock",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})

gsap.from(".reliableLeft",{
    x:-50,
    opacity:0,
    duration:1.1,
    scrollTrigger:{
        trigger:".reliableLeft",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})
gsap.from(".reliableRight",{
    x:50,
    opacity:0,
    duration:1.1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".reliableRight",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
    }
})



gsap.from(".footer-column",{
    y:50,
    opacity:0,
    duration:1.1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".footer-column",
        // markers:true,
        start:"top 100%",
        end:"top 70%",
    }
})
gsap.from(".footerBottom p",{
    y:50,
    opacity:0,
    duration:1.1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".footerBottom",
        // markers:true,
        start:"top 90%",
        end:"top 80%",
    }
})
gsap.from(".footerBottom img",{
    y:50,
    opacity:0,
    duration:1.1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".footerBottom",
        // markers:true,
        start:"top 90%",
        end:"top 85%",
    }
})








    function animateNumbers() {
        const numbers = document.querySelectorAll('.number');

        numbers.forEach(num => {
            const target = +num.dataset.target;
            let count = 0; 
            const duration = 20000; 
            const increment = target / (duration / 100);

            const updateCount = () => {
                count += increment; // Increment the count
                if (count < target) {
                    num.textContent = Math.floor(count).toLocaleString() + '+'; 
                    requestAnimationFrame(updateCount); 
                } else {
                    num.textContent = target.toLocaleString() + '+'; 
                }
            };

            updateCount(); 
        });
    }

    const options = {
        root: null, 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(); 
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    observer.observe(document.querySelector('.metrics'));




    
