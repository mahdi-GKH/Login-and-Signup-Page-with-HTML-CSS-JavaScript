function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

function m() {
    var show = document.getElementById("fp");
    var check = document.getElementById("login2");

    if (window.getComputedStyle(check).zIndex == '1'){
        document.getElementById('login2').style.marginLeft = '45%';
        show.style.visibility = 'hidden';
        document.getElementById('login2').style.zIndex = '0';

    } else{
        document.getElementById('login2').style.zIndex = '1';
        document.getElementById('login2').style.marginLeft = '35%';
    }
    
    
}

function m2() {
    

    document.getElementById('login2').style.zIndex = '1';
    document.getElementById('login2').style.marginLeft = '35%';
    
    
    
}
function fp(){
    var show = document.getElementById("fp");
    if (show.style.visibility == 'hidden'){
        show.style.visibility = 'visible';
        
    }else {
        show.style.visibility = 'hidden';

    }

    
}

function passfg(){
    var log = document.getElementById('alert');

    log.innerHTML += 'check your mail!';
    setTimeout(() => {  log.innerHTML = ''; }, 3000);
}
function creat(){
    var log = document.getElementById('alert2');

    log.innerHTML += 'welcome';
    setTimeout(() => {  log.innerHTML = ''; }, 3000);
}
