
class AudioController {
    constructor() {
        this.btnClickAdult = new Audio('assets/audio/scream.wav');
        this.btnClickChild = new Audio('assets/audio/evil_laugh.wav');
        this.bgMusic = new Audio('assets/audio/bgAudio.mp3');

        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }

    startMusic(){
        this.bgMusic.play();
    }

    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }

    adultAudio() {
        this.btnClickAdult.play();
    }

    childAudio(){
        this.btnClickChild.play();
    }
}

class buttonEvent {
    constructor() {
        this.audioController = new AudioController();
    }
    
    adultAudio() {
        this.AudioController.adultAudio();
        document.getElementById('adult-story').addEventListener('click', play());
    }

    childAudio(){
        this.btnClickChild.play();
    }
}
