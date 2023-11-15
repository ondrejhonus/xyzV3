let audioContext;
let oscillator;

function startMetronome() {
    let bpmInput = document.getElementById('bpmInput');
    let bpm = parseInt(bpmInput.value);

    if (!bpm || bpm <= 0) {
        alert('Please enter a valid BPM value.');
        return;
    }

    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    playMetronome(bpm);
}

function playMetronome(bpm) {
    let interval = 60000 / bpm; // Calculate interval in milliseconds

    oscillator = audioContext.createOscillator();
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime); // 1000 Hz frequency
    oscillator.connect(audioContext.destination);
    oscillator.start(audioContext.currentTime);

    oscillator.stop(audioContext.currentTime + interval / 1000);
    oscillator.onended = () => {
        playMetronome(bpm);
    };
}

function stopMetronome() {
    if (oscillator) {
        oscillator.stop();
    }
    if (audioContext) {
        audioContext.close();
    }
}
