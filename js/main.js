const tl = gsap.timeline({defaults: {duration: 2.75}})

tl.fromTo('.welcome-container',{scale:0}, {scale:1})
tl.fromTo('.welcome-img',{opacity:0, x:50}, {duration: 3.75, opacity:1, x:0, ease: "elastic.out(3, 0.3)"},'<50%')