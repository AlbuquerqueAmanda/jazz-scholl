function togglePlayPause(audioId, buttonElement) {
const element = document.querySelector(audioId);
if (element && element.localName === 'audio') {
    if (element.paused) {
        element.play();
        buttonElement.textContent = '||';
      } else {
        element.pause();
        buttonElement.textContent = '▶';
      }
}
else {
    console.log('Not found');
}
}
const boxes = document.querySelectorAll('.song');

for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const song = box.classList[1];
    const idAudio = `#audio-${song}`;
    const playPauseButton = box.querySelector('.play-pause-button');

    box.onclick = function () {
      togglePlayPause(idAudio, playPauseButton);
    }
}
