/*==================================
    MENÚ RESPONSIVE
==================================*/

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        nav.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menuBtn.classList.remove("open");

    });

});


/*==================================
    HEADER AL HACER SCROLL
==================================*/

const header = document.getElementById("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 60){

        header.classList.add("active");

    }else{

        header.classList.remove("active");

    }

});


/*==================================
    CONTADORES
==================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let current = 0;

            const step = target / 80;

            const update = ()=>{

                current += step;

                if(current < target){

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target + "+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:.6
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*==================================
    ANIMACIONES AL SCROLL
==================================*/

const elements = document.querySelectorAll(

".service-card,.hero-card,.timeline div,.testimonial-grid article,.benefits-boxes div,.faq-list details"

);

elements.forEach(el=>{

    el.classList.add("fade-up");

});

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

elements.forEach(el=>observer.observe(el));


/*==================================
    PARALLAX HERO
==================================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    const x = (e.clientX / window.innerWidth - .5) * 15;

    const y = (e.clientY / window.innerHeight - .5) * 15;

    hero.style.backgroundPosition = `${50+x}% ${50+y}%`;

});


/*==================================
    BOTÓN VOLVER ARRIBA
==================================*/

const topButton = document.createElement("div");

topButton.id="topButton";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topButton.classList.add("show");

    }else{

        topButton.classList.remove("show");

    }

});


/*==================================
    EFECTO HOVER 3D
==================================*/

document.querySelectorAll(".service-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width/2)/18;

        const rotateX = -(y - rect.height/2)/18;

        card.style.transform =
        `perspective(800px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});


/*==================================
    EFECTO BRILLO BOTONES
==================================*/

document.querySelectorAll(".btn-primary").forEach(btn=>{

    btn.addEventListener("mousemove",e=>{

        const rect = btn.getBoundingClientRect();

        btn.style.setProperty("--x",(e.clientX-rect.left)+"px");

        btn.style.setProperty("--y",(e.clientY-rect.top)+"px");

    });

});


/*==================================
    EFECTO TYPEWRITER HERO
==================================*/

const title = document.querySelector(".hero h1");

if(title){

    const text = title.textContent;

    title.textContent="";

    let i=0;

    function write(){

        if(i<text.length){

            title.textContent += text.charAt(i);

            i++;

            setTimeout(write,20);

        }

    }

    setTimeout(write,300);

}


/*==================================
    REVELAR TIMELINE
==================================*/

document.querySelectorAll(".timeline div").forEach((item,index)=>{

    item.style.transitionDelay=(index*0.15)+"s";

});


/*==================================
    EFECTO FLOTANTE HERO
==================================*/

setInterval(()=>{

    document.querySelectorAll(".hero-card").forEach((card,index)=>{

        card.animate([

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-8px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],{

            duration:3000+(index*400),

            iterations:1

        });

    });

},3200);

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{

loader.classList.add("loader-hide");

},2700);

});


/*==================================
    MODAL CONTACTO
==================================*/

const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");
const auditForm = document.getElementById("auditForm");

if (modal && openBtn) {

    openBtn.addEventListener("click", (e) => {

        e.preventDefault();
        modal.classList.add("active");

    });

}

if (modal && closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.classList.remove("active");

    });

    modal.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.classList.remove("active");

        }

    });

}


/*==================================
    NAVBAR MOVIL
================================== */
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("active");

});

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

    });

});