//Lev1_2//objects
/*let person = {
    nName: `Manni`,
    age: `63`
    wtf
 */




//Lev1_4//
let unsereHausTiere = [{
        tierTyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tierTyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
]
console.log(unsereHausTiere);
console.log(unsereHausTiere[0].names[1]);
console.log(unsereHausTiere[1].names[2]);
console.log(unsereHausTiere[0, 1].names);

//Lev1_5//
let unserLager = {
    schreibTisch: {
        schublade: "Hefter"
    },
    schrank: {
        obereSchublade: {
            Ordner1: "Dokumente",
            ordner2: "Geheimnisse"
        },
        untereSchublade: "Cola"
    }
}
console.log(unserLager);
//console.log(unserLager.schrank.obereSchubLade.ordner2);
console.log(unserLager.schrank.untereSchublade);
console.log(unserLager.schreibTisch.schublade);

//Lev1_6//
let myMusic = [{
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
]

console.log(myMusic);
console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
//console.log(myMusic[1].gold());
console.log(myMusic[2].release_year);
console.log(myMusic[3].release_year);
console.log(myMusic[3].medium[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(-2));
console.log(myMusic[1].artist.slice(5, 10));

//Lev1_7//
let myMusic1 = [{
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
]
console.log(myMusic1[0].artist);
console.log(myMusic1[0].title);
console.log(myMusic1[0].medium);
console.log(myMusic1[1].artist);
console.log(myMusic1[1].title);
console.log(myMusic1[1].medium);
console.log(myMusic1[2].artist);
console.log(myMusic1[2].title);
console.log(myMusic1[2].medium);
console.log(myMusic1[3].artist);
console.log(myMusic1[3].title);
console.log(myMusic1[3].medium);

//printHTML fehlt

//Lev1_8//
let studentData = [{
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
]
console.log(studentData);
let keyArr = Object.keys(studentData)
    //console.log(keyArr);

//Lev1_9//
const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
]
singers.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else { return 0; }
})
console.log(singers);