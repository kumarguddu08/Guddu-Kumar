
// ===============================
// Typing Animation
// ===============================

var typed = new Typed("#typing", {

    strings: [
        "SEO Executive",
        "Technical SEO Expert",
        "WordPress SEO Specialist",
        "Digital Marketing Professional"
    ],

    typeSpeed:80,
    backSpeed:50,
    backDelay:1500,
    loop:true

});



// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".count");


counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");

        const current = +counter.innerText;


        const increment = target / 100;


        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }

        else{

            counter.innerText = target + "+";

        }


    };


    updateCounter();


});




// ===============================
// Dark / Light Mode
// ===============================

const toggle = document.querySelector(".theme-toggle");


toggle.addEventListener("click",()=>{


    document.body.classList.toggle("light");


    const icon = toggle.querySelector("i");


    if(document.body.classList.contains("light")){


        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");


    }

    else{


        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");


    }


});




// ===============================
// Custom Cursor
// ===============================


const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove",(e)=>{


    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";


});




// ===============================
// Particle Background
// ===============================


particlesJS("particles",{


    particles:{


        number:{

            value:80,

            density:{

                enable:true,

                value_area:800

            }

        },


        color:{

            value:"#38bdf8"

        },


        shape:{

            type:"circle"

        },


        opacity:{

            value:0.5

        },


        size:{

            value:3,

            random:true

        },


        line_linked:{


            enable:true,

            distance:150,

            color:"#38bdf8",

            opacity:0.3,

            width:1


        },


        move:{


            enable:true,

            speed:2


        }


    },


    interactivity:{


        events:{


            onhover:{


                enable:true,

                mode:"grab"


            },


            onclick:{


                enable:true,

                mode:"push"


            }


        }


    },


    retina_detect:true



});




// ===============================
// Scroll Reveal Animation
// ===============================


const revealElements = document.querySelectorAll(
".glass,.service,.skill,.project,.timeline-item,.box"
);



function reveal(){


    revealElements.forEach(element=>{


        const position = element.getBoundingClientRect().top;


        const screen = window.innerHeight - 100;


        if(position < screen){


            element.style.opacity="1";

            element.style.transform="translateY(0)";


        }


    });


}



window.addEventListener("scroll",reveal);

reveal();




// ===============================
// Smooth Navigation
// ===============================


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",(e)=>{


        e.preventDefault();


        document.querySelector(
        link.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });


    });


});




// ===============================
// Contact Form Demo
// ===============================


const form = document.querySelector("form");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
    "Thank you! Your message has been received."
    );


    form.reset();


});