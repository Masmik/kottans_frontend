export function realTimeClock() {
    let time = new Date();
    let hours = time.getHours().toString();
    let min = time.getMinutes().toString();
    let sec = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (min.length < 2) {
        min = '0' + min;
    }

    if (sec.length < 2) {
        sec = '0' + sec;
    }

    let clockString = hours + ' : ' + min + ' : ' + sec;

    return clockString;
}
