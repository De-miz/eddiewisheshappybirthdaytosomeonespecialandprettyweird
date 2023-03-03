
var count = 0,
welcome_screen = document.getElementsByClassName('welcome-wish')[0],
msg_box = [
    'Eddie: May God make you the fruitful result of an investment, \
    you will return > 100x of what was invested, may God lift you to \
    an outreach boundary away from your enemies. Happy Birthday baby sis.', 

    'Eddie: Happy Birthday baby sis, may God bring your wishes to \
    life, may God hold u tight for mommy n daddy. We love u.', 

    'Mom: As you grow into adulthood, never lose your sense of wonder. \
    Happy birthday, to my favorite girl.', 

    'Mom: I hope your special day is as special as you! Nothing \
    lights up my world more than you! Love you my much baby.', 

    'Dad: Happy birthday dear! I wish you all the very best on \
    this special day. May you be blessed today, tomorrow, and in \
    the upcoming days to come. May you have a wonderful birthday \
    and many more to come.'

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
], fixed_index = Math.floor(Math.random() * 10);

var msg = msg_box[(fixed_index > 4) ? fixed_index - 5: fixed_index];

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
        (count == msg.length-1) ? setTimeout(typer, 5000):setTimeout(typer, 100);
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