
let adultStoryBtn = new Audio('assets/audio/scream.wav');
let childtStoryBtn = new Audio('assets/audio/kid.mp3');
let bgMusic = new Audio('assets/audio/screamofsouls.wav');

document.getElementsByClassName('nav-link')[0].addEventListener('click', bgAudio);
document.getElementById('adult-story').addEventListener('click', adultBtnAudio);
document.getElementById('children-story').addEventListener('click', childBtnAudio);

function bgAudio(){
    bgMusic.play();
    bgMusic.volume = 0.5; 
    bgMusic.loop = true;
}

function adultBtnAudio() {
    adultStoryBtn.play();
    adultStoryBtn.volume = 0.5; 
}

function childBtnAudio() {
    childtStoryBtn.play();
    childtStoryBtn.volume = 0.5; 
}