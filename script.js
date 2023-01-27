console.log("hello");
//Initialsie the variables
let songIndex= 1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprog= document.getElementById("myprog");
let gif= document.getElementById("gif");
let progress=document.getElementById("progress");
let master= document.getElementById("master");
let songitemplay=document.getElementsByClassName("songitemplay");
let songitem= Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Warriyo-Mortals", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"Cielo- Huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Deaf Kev", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Different Heaven &Ehide", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Janji- Heroes- Feat", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"let me love you", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"David R_Edge", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Electric War", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Open Universe", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    // {songName:"from me to you", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    // {songName:"People I Hate",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    // {songName:"Look For Meh?",filePath:"songs/3.mp3",coverPath:"covers/4.jpg"},
    // {songName:"Cover me in sunshine",filePath:"songs/6.mp3",coverPath:"covers/5.jpg"},
]
//adding covers and names of the songlist through javascript
songitem.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i]
.songName;
})


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

// songitemplay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0)
//     {
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity=1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity=0;
//     }
// })
//listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');

    //SEEKBAR
    prog=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(prog);
    progress.value=prog;
})

progress.addEventListener('change',()=>{
    audioElement.currentTime= progress.value * audioElement.duration/100;
})

const makeAllPlays=()=>
{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        gif.style.opacity=1;
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>
    {
        // console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex}.mp3`;
        master.innerText=songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();

        // audioElement.src=`songs/${index}.mp3`;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9)
    {
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    master.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<1)
    {
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    master.innerText=songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})