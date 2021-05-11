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
        console.log(TxtParse(data));
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
function TxtParse(TxT, Time) {
    let GCDCB = "Gator&nbsp;Corner&nbsp;Dining&nbsp;Center&nbsp;-&nbsp;Dinner&nbsp;@&nbsp;Corner&nbsp;of&nbsp;Gale&nbsp;Lemerand&nbsp;Dr.&nbsp;and&nbsp;Stadium&nbsp;Rd.";
    let GCDCL = "Gator&nbsp;Corner&nbsp;Dining&nbsp;Center&nbsp;-&nbsp;&nbsp;Lunch";
    let GCDCD = "Gator&nbsp;Corner&nbsp;Dining&nbsp;Center&nbsp;-&nbsp;Dinner";
    let tr = "tr";
    let StartN = TxT.search(GCDCB) + GCDCB.length;
    let EndN = TxT.substring(StartN).search(tr) + StartN;
    let hours_string = strClean(TxT.substring(StartN, EndN));
    return hours_string;
}

function hoursExtract(str) {
    let store = new Store(); 
    store.Monday = [];
    store.Tuesday = [];
    store.Wednesday = [];
    store.Thursday = [];
    store.Friday = [];
    store.Saturday = [];
    store.Sunday = [];
    return store;
}

function strClean(str) {
    str = str.replace(/([^0-9:#]|CLOSED)/gm, "");
    str = str.replace(/(#....)/gm, "");
    str = str.replace(/(.4:)/gm, "4:");
    return str;
}
function GetTime() {
    let d = new Date();
    let Hours = d.getHours();
    let Minutes = d.getUTCMinutes();
    let Day = d.getDay();
    console.log(TimeFormatter(Hours, Minutes, Day));
}

function TimeFormatter(Hours, Minutes, Day) {
    let M = 'AM';
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (Hours > 12) {
        Hours = Hours - 12;
        M = 'PM';
    }
    Day = days[Day];
    HTime.ampm = M;
    HTime.hours = Hours;
    HTime.minutes = Minutes;
    HTime.day = Day;
    return HTime;
}



GetTime();