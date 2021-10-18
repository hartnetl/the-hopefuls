// Set global variables
let storyTextEl = document.getElementById('story-text');
let optionBtnContainer = document.querySelector('.buttons-container');
let bgImage = document.getElementById('bg-image');

let chosenStory = [];
let state = [];
let typeit;

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
    if (typeit) typeit.reset();  // empty previous typeit text before initializing new text
    let scene = chosenStory.find(scene => scene.id === sceneIndex)

    typeit = new TypeIt("#story-text", {
        strings: scene.text,
        speed: 45,
        loop: false,
      }).go();

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

// Typeit for welcome text

new TypeIt("p, storyTextEl.innerText", {
    speed: 75,
    loop: false,
  }).go();
