const icon = document.querySelector(".change");
// console.log(icon);
const counter = document.getElementById("team-count");
// console.log(counters);

    counter.innerText = "0";
    const updatecounter = ()=> {

        // const target = Number(counter.getAttribute("data-target"));
        const target = +counter.getAttribute("data-target");
        // console.log(target);
        // console.log(typeof target, target);

        const ctr = Number(counter.innerText);
        // console.log(typeof ctr, ctr);

        const increment = Math.ceil(target / 100);
        // console.log(increment);

        if(ctr < target){
            counter.innerText = ctr + increment;

            setTimeout(updatecounter,500);
        }

        if(ctr > 9) {
            icon.classList.remove("fa-user");
            icon.classList.add("fa-user-friends");
        }

        if(ctr > 17  ){
            icon.classList.remove("fa-user-friends");
            icon.classList.add("fa-users");
        }

    };
    updatecounter();



