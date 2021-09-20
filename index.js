const music = new Audio('argentinidad.mp3');

const sumar = () => {
    const calform = document.getElementById('calform');
    const result = eval(calform.display.value);
    calform.display.value = result || 0;

    music.load();
    music.play();
}