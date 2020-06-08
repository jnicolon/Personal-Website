const img = document.querySelector('#img');
const winHeight = window.innerHeight;
const winWidth = window.innerWidth;

function imgTrans(){
    console.log(winHeight)
    if(img.height > winHeight + 200) {        
        img.style.transform = "translateY(200px)";
      
    } else {
        img.style.transform = "translateY(0px)";
    }
}

window.onload = imgTrans;
window.onresize = imgTrans;


