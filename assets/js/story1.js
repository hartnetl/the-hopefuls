// Set global variables
let storyTextEl = document.getElementById('story-text');
let buttonOptionsEl = document.getElementById('button-options');
let bgImage = document.getElementById('bg-image');


// Create startStory function
function startStory() {
    showScene(1)
}

// Create show scene function
function showScene(sceneIndex) {
    let scene = scenes.find(scene => scene.id === sceneIndex)
    storyTextEl.innerText = scene.text;
    bgImage.style.backgroundImage = scene.background;
    while (buttonOptionsEl.firstChild) {
        buttonOptionsEl.removeChild(buttonOptionsEl.firstChild);
    }

    // loop through options and create button for each
    scene.options.forEach(option => {
        let button = document.createElement('button')
        button.innertext = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => optionSelect(option)) 
        buttonOptionsEl.appendChild(button)
    })
}

function optionSelect(option) {
    let nextSceneId = option.nextScene
    if (nextSceneId <= 0) {
        return startStory()
    }
    showScene(nextSceneId)
}

// Define scenes
let scenes = [
    {
        id: 1,
        text: "Test Scene 1",
        background: " ",
        options: [
            {
                option: "Test Option 1",
                nextScene: 2
            },
            {
                option: "Test Option 2",
            },
            {
                option: "Test Option 3",
            }
        ]
    },
    {
        id: 2,
        text: "Test Scene 2",
        background: " ",
        options: [
            {
                option: "Test Option 1",
                nextScene: 3
            },
            {
                option: "Test Option 2",
            },
            {
                option: "Test Option 3",
            }
        ]
    },
    {
        id: 101,
        text: "Test The End",
        background: " ",
        options: [
            {
                option: "Test Restart",
                nextScene: -1,
            },
        ]
    },
]

// Start the story
startStory()


