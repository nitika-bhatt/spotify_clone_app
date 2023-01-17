console.log("hello");
//Initialsie the variables
let songIndex= 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprog= document.getElementById("myprog");
let gif= document.getElementById("gif");

let songs=[
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"let me love you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
]

//Handle pause play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})