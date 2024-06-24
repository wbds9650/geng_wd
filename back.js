
function backgroun12(){
    document.getElementsByClassName('bg')[0].style.background="url(/img/bgdark2.jpg)";
}
function background122(){
    document.getElementsByClassName('bg')[0].style.background="url(/img/bglight.png)";
}

function backgroun(){
    let headingId = document.getElementById("bg");
    headingId.classList.remove("light");
    headingId.classList.add('dark');
    let mh = document.getElementById('cr');
    mh.classList.remove('l1');
    mh.classList.add('l2');
    let md = document.getElementById('cr1');
    md.classList.remove('l1');
    md.classList.add('l2');
    let md1 = document.getElementById('cr3');
    md1.classList.remove('l1');
    md1.classList.add('l2');
}


function background1(){
    let headingId = document.getElementById("bg");
    headingId.classList.remove("dark");
    headingId.classList.add('light');

    let mh = document.getElementById('cr');
    mh.classList.remove('l2');
    mh.classList.add('l1');
    let md = document.getElementById('cr1');
    md.classList.remove('l2');
    md.classList.add('l1');
    let md1 = document.getElementById('cr3');
    md1.classList.remove('l2');
    md1.classList.add('l1');
}
