console.log("welcome to spotify");


//initialising the variables
let songIndex=0;
audioElement = new Audio('song1.mp3');
masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
    {songName:"Salam-e-Ishq",filepath:"song/song1.mp3",coverpath:"covers/1.jpg"},
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
    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //Update Seekbar
})