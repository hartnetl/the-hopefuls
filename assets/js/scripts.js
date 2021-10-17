// Set global variables
let storyTextEl = document.getElementById('story-text');
let optionBtnContainer = document.querySelector('.buttons-container');
let bgImage = document.querySelector('body');

// let adultStoryBtn = new Audio('assets/audio/scream.wav');
// let childtStoryBtn = new Audio('assets/audio/evil_laugh.wav');
// let bgMusic = new Audio('assets/audio/screamofsouls.wav');

// let adultBtn = document.getElementById('adult-story');
// let childBtn = document.getElementById('children-story');

let chosenStory = [];

// Event listeners 
// document.getElementsByClassName('nav-link')[0].addEventListener('click', bgAudio);
// document.getElementById('adult-story').addEventListener('click', adultBtnAudio);
// document.getElementById('children-story').addEventListener('click', childBtnAudio);
// adultBtn.addEventListener('click', adultBtnAudio);
// childBtn.addEventListener('click', childBtnAudio);


// function bgAudio() {
//     bgMusic.play();
//     bgMusic.volume = 0.5;
//     bgMusic.loop = true;
// }

// function adultBtnAudio() {
//     adultStoryBtn.play();
//     adultStoryBtn.volume = 0.5;
// }

// function childBtnAudio() {
//     childtStoryBtn.play();
//     childtStoryBtn.volume = 0.5;
// }

function fetchStory(story) {
    $('section.hero-image').addClass('d-none');
    $('section.game-section').removeClass('d-none');
    fetch(`assets/js/${story}.json`)
        .then(res => res.json())
        .then(data => {
            chosenStory = data;
            startStory();
        })
    setColorScheme(story);  
}

function setColorScheme(story) {
    if (story === 'adultStory') {
        $('body').addClass('adult-theme');
    } else {
        $('body').addClass('kid-theme');
    }
}

// Create startStory function
function startStory() {
    showScene(1)
}

function showScene(sceneIndex) {
    let scene = chosenStory.find(scene => scene.id === sceneIndex)
    storyTextEl.innerText = scene.text;
    bgImage.style.backgroundImage = scene.background;
    while (optionBtnContainer.firstChild) {
        optionBtnContainer.removeChild(optionBtnContainer.firstChild);
    }

    // loop through options and create button for each
    scene.options.forEach(option => {
        let button = document.createElement('button');
        button.textContent = option.option;
        button.classList.add('btn', 'btn-color', 'btn-lg');
        button.addEventListener('click', () => optionSelect(option));
        optionBtnContainer.appendChild(button);
    })
}

function optionSelect(option) {
    let nextSceneId = option.nextScene
    if (nextSceneId <= 0) {
        return startStory()
    }
    showScene(nextSceneId)
}