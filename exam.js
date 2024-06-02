var array = ["Bab", "Bae", "Bai", "Bau", "Bao", "Bay",
    "Cab", "Ceb", "Cib", "Cub", "Cob", "Cyb",
    "Dab", "Deb", "Dib", "Dub", "Dob", "Dyb",
    "Fab", "Feb", "Fib", "Fub", "Fob", "Fyb",
    "Gab", "Geb", "Gib", "Gub", "Gob", "Gyb",
    "Hab", "Heb", "Hib", "Hub", "Hob", "Hyb",
    "Jab", "Jeb", "Jib", "Jub", "Job", "Jyb",
    "Kab", "Keb", "Kib", "Kub", "Kob", "Kyb",
    "Lab", "Leb", "Lib", "Lub", "Lob", "Lyb",
    "Mab", "Meb", "Mib", "Mub", "Mob", "Myb",
    "Nab", "Neb", "Nib", "Nub", "Nob", "Nyb",
    "Pab", "Peb", "Pib", "Pub", "Pob", "Pyb",
    "Rab", "Reb", "Rib", "Rub", "Rob", "Ryb",
    "Sab", "Seb", "Sib", "Sub", "Sob", "Syb",
    "Tab", "Teb", "Tib", "Tub", "Tob", "Tyb",
    "Vab", "Veb", "Vib", "Vub", "Vob", "Vyb",
    "Wab", "Web", "Wib", "Wub", "Wob", "Wyb",
    "Xab", "Xeb", "Xib", "Xub", "Xob", "Xyb",
    "Yab", "Yeb", "Yib", "Yub", "Yob", "YYb",
    "Zab", "Zeb", "Zib", "Zub", "Zob", "Zyb",
];

var letters = ["a", "b", "c", "d", "e",
    "f", "g", "h", "i", "k",
    "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u",
    "v", "w", "x", "y", "z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var newArray = [];
var newArrayMix = [];
var newArrayNumber = [];
var newArrayNumberMix = [];

//NUMB 1: Add 1 letter to Array element
array.forEach(addOneLetter)
function addOneLetter(item) {
    for (let i = 0; i < letters.length; ++i) {
        newArray.push(item + letters[i]);
    }
    return newArray;
}

//NUMB 2: mix leters on Array element
newArray.forEach(mixLetterOnArray)
function mixLetterOnArray(item) {
    var newItemArray = item.split('');
    newItemArray.sort(
        function () {
            return 0.5 - Math.random()
        }
    )

    newItem = newItemArray.join('');

    newArrayMix.push(newItem);
}


//NUMB 3: mix 1 number to Array element
array.forEach(addOneNumber)
function addOneNumber(item) {
    for (let i = 0; i < numbers.length; ++i) {
        newArrayNumber.push(item + numbers[i]);
    }

}

//NUMB 4: mix leters on element (number)
newArrayNumber.forEach(mixNumberOnArray)
function mixNumberOnArray(item) {
    var newItemArray = item.split('');
    newItemArray.sort(
        function () {
            return 0.5 - Math.random()
        }
    )

    newItem = newItemArray.join('');

    newArrayNumberMix.push(newItem);

}

////////////////////////////////////////////////////
/*Display To HTML */

function toStringnewArrayNumberMix() {

    var x = document.getElementById("toStringnewArrayNumberMix");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toStringnewArrayNumberMix").innerHTML = newArrayNumberMix.toString();

}
function toStringnewArrayNumber() {

    var x = document.getElementById("toStringnewArrayNumber");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toStringnewArrayNumber").innerHTML = newArrayNumber.toString();

}

function toStringnewArrayMix() {

    var x = document.getElementById("toStringnewArrayMix");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toStringnewArrayMix").innerHTML = newArrayMix.toString();

}

function toStringnewArray(){
    var x = document.getElementById("toStringnewArray");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("toStringnewArray").innerHTML = newArray.toString();
}