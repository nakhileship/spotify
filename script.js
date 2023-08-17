console.log("welcome to spotify");


//initialising the variables
let songIndex=0;
audioElement = new Audio('song1.mp3');
masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');


let songs = [
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song2.mp3",coverpath:"covers/2.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song3.mp3",coverpath:"covers/4.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song4.mp3",coverpath:"covers/5.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song5.mp3",coverpath:"covers/6.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/7.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
]
let audioaElement = new Audio('song1.mp3')

//audioElement.play();

//Handle Play/puse click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioaElement.currentTime<=0){
        audioaElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioaElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})
    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime = myProgressBar.value * audioElement ;
    })