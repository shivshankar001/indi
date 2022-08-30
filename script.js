console.log("Welocome");
letsongindex=0;
let audioelement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');

let songs = {
    // {songname: "hello", filepath: "song/1.mp3", coverpath:"covers/1.mp3"}
}
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused||audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause')
    }
    else{
        audioelement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
    }
}

)
