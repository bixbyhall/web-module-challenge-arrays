const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"
]
const newFlavors = [
    "Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"
] 

const seasonalFlavors = [
    "America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango"
]

const regionalFlavors = [
    "Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"
]

function copy(array){
    let copy_array = array.slice();
    return copy_array;
}    

function is31Flavors(array) {
    let output = false;
    if (array.length === 31) {
        output = true;
    }
    return output;
}

function addFlavor(array, newFlavor) {
    let addedFlavor = array;
    addedFlavor.unshift(newFlavor);
    return addedFlavor;
}

function removeLastFlavor(array) {
    let adjustedFlavor = array;
    adjustedFlavor.pop();
    return adjustedFlavor;
}

function getFlavorByIndex(array, index) {
    return array[index];
}

function removeFlavorByName(array, flavor) {
    let index;
    for (let i = 0; i <= array.length -1; i++) {
        if (array[i] === flavor) {
            index = i;
        }
    }
    array.splice(index, 1);
    return array;
}

function filterByWord(array, string) {
    
    let filteredArray = [];
    
    for (let i = 0; i <= array.length - 1; i++) {
        let flavor = array[i];
        if (flavor.includes(string)) {
            filteredArray.push(flavor);
        }
    }
    return filteredArray;
}

// Stretch Goal

function countWords(str) {
    let words = str.split(' ');
    let count = words.length;
    return count;
}

function getAverageWordLength(array) {
    let values = [];
    for (let i = 0; i <= array.length - 1; i++) {
       values.unshift(countWords(array[i]));
   }
   return (values.reduce((a, b) => a + b, 0)) / array.length;
}

// Stretch Goal 2

function getRandomInt(max) {

    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomFlav(arr1, arr2, arr3, arr4) {

    let arrList = [arr1, arr2, arr3, arr4];
    let randomArray = arrList[getRandomInt(4)];
    let randomFlavor = randomArray[getRandomInt(randomArray.length)];

    return randomFlavor;
}

function pushFlavor(output_array, arr1, arr2, arr3, arr4) {
    let randomFlavor = getRandomFlav(arr1, arr2, arr3, arr4);
    if (output_array.includes(randomFlavor) === false) {
        output_array.push(randomFlavor);
    } else {
        pushFlavor(output_array, arr1, arr2, arr3, arr4);
    }
}

function getRandomFlavors(arr1, arr2, arr3, arr4) {

    let randomFlavors = [];
    while (is31Flavors(randomFlavors) === false) {
        pushFlavor(randomFlavors, arr1, arr2, arr3, arr4);
    }
    
    return randomFlavors;
}