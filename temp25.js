var ms = 0;
var state = 0;

function startstop() {
    if (state == 0) {
        state = 1;
        then = new Date();
        then.setTime(then.getTime() - ms);
    } else {
        state = 0;
        now = new Date();
        ms = now.getTime() - then.getTime();
        document.stpw.time.value = ms;
    }
}

function swreset() {
    state = 0;
    ms = 0;
    document.stpw.time.value = ms;
}

function display() {
    setTimeout(display, 50);
    if (state == 1)  {now = new Date();
        ms = now.getTime() - then.getTime();
        document.stpw.time.value = ms;
    }
}

display()
$("#a").on("click", startstop)
$("#b").on("click", swreset)
