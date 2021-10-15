
let adultStoryBtn = new Audio('assets/audio/scream.wav');
let childtStoryBtn = new Audio('assets/audio/evil_laugh.wav');

document.getElementById('adult-story').addEventListener('click', adultBtnAudio);
document.getElementById('children-story').addEventListener('click', childBtnAudio);

function adultBtnAudio() {
    adultStoryBtn.play();
    adultStoryBtn.volume = 0.5; 
}

function childBtnAudio() {
    childtStoryBtn.play();
    childtStoryBtn.volume = 0.5; 
}