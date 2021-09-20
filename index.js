const sumar = () => {
    const calform = document.getElementById('calform');
    const result = eval(calform.display.value);
    calform.display.value = result ? result : 0;

    const music = new Audio('coscu.mp3');
    music.play();
}