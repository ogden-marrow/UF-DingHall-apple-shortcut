/*jshint esversion: 6 */
// fetch('https://www.bsd.ufl.edu/dining/Hours/RegularHours.aspx')
//     .then(response => response.text())
//     .then(data => {
//         TxtParse(data);
//     });

// ha ha lol
fetch('hours.txt')
    .then(response => response.text())
    .then(data => {
       TxtParse(data);
    });
let HTime = {
    hours: 24,
    minutes: 59,
    ampm: 'AM',
    day: 'Sunday'

};

let Store = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: []
};

function build(RawTxt) {
    let GCDC = new Store();
    let WRU = new Store();
    let SRU = new Store();
    return GCDC, WRU, SRU;
}
function TxtParse(TxT) {
    let log = ('tty').search();
    console.log(TxT.search("Gator&nbsp;Corner&nbsp;Dining&nbsp;Center&nbsp;-&nbsp;&nbsp;Lunch&nbsp;@&nbsp;Corner"));
}

function GetTime() {
    let d = new Date();
    let offset = (d.getTimezoneOffset() / 60);
    let Hours = d.getUTCHours();
    let Minutes = d.getUTCMinutes();
    let Day = d.getDay();
    console.log(TimeFormatter(Hours, offset, Minutes, Day));
}

function TimeFormatter(Hours, offset, Minutes, Day) {
    let M = 'AM';
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    Day = days[Day];
    HTime.ampm = M;
    HTime.hours = Hours;
    HTime.minutes = Minutes;
    HTime.day = Day;
    return HTime;
}



GetTime();