// Set global variables
let storyTextEl = document.getElementById('story-text');
let optionBtnContainer = document.querySelector('.buttons-container');
let bgImage = document.getElementById('bg-image');

let chosenStory = [];
let state = [];

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
    state = [];
    showScene(1);
}

function showScene(sceneIndex) {
    let scene = chosenStory.find(scene => scene.id === sceneIndex)
    storyTextEl.innerText = scene.text;
    storyTextEl.classList.add('typing');
    bgImage.style.backgroundImage = scene.background;
    while (optionBtnContainer.firstChild) {
        optionBtnContainer.removeChild(optionBtnContainer.firstChild);
    }

    // loop through options and create button for each
    scene.options.forEach(option => {
        if (showOption(option)) {
            let button = document.createElement('button');
            button.textContent = option.option;
            button.classList.add('btn', 'btn-color', 'btn-lg', 'option-btns');
            button.addEventListener('click', () => selectOption(option));
            optionBtnContainer.appendChild(button);
        }
    })
}

function showOption(option) {
    requiredState = option.requiredState;
    if (requiredState == null || state.includes(requiredState))
        return true
}

function selectOption(option) {
    let nextSceneId = option.nextScene
    if (nextSceneId <= 0) {
        return startStory()
    }
    state.push(option.setState);
    showScene(nextSceneId)
}
