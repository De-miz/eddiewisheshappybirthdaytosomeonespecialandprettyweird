
var count = 0,
welcome_screen = document.getElementsByClassName('welcome-wish')[0],
msg_box = [
    'Eddie: May God make you the fruitful result of an investment, \
    you will return > 100x of what was invested, may God lift you to \
    an outreach boundary away from your enemies. Happy Birthday baby sis.', 

    'Eddie: Happy Birthday baby sis, may God bring your wishes to \
    life, may God hold u tight for mommy n daddy. We love u.', 

],  color_box = [
    'red', 
    'yellow', 
    'blue', 
    'red', 
    'yellow', 
    'purple', 
    'brown', 
    'blue',
    'purple'
], msg = msg_box[(Math.floor(Math.random() * 10) % 2 == 0) ? 0:1];

function btnClick() {
    let element = document.getElementById("hidden");
    let play = document.getElementById("audio");
    element.setAttribute("style", "height: fit-content");
    play.play();
}

function stopSong() {
    let player = document.getElementById("audio");
    let hide = document.getElementById("hidden");
    hide.setAttribute("style", "height: 30px");
    player.pause();
    player.currentTime = 0;
}

function typer() {
    if (count < msg.length) {
        document.getElementById("msg").innerHTML += msg[count].fontcolor(color_box[Math.floor(Math.random() * 10)]);
        (count == msg.length-1) ? setTimeout(typer, 10000):setTimeout(typer, 100);
        count++;
    } else {
        welcome_screen.style.display = 'none';
    }
}

function hide() {
    if (count >= msg.length/2) {
        welcome_screen.style.display = 'none';
    }
}