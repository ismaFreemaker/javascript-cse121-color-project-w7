// this folder is to grab the things from the HTML main file 
// and make some little changes
import {colors} from "./colorsModule.js";



function domQuery(element){
    return document.querySelector(element);
}
function createEl(element){
    return document.createElement(element);
}

// let greatColor = colors[0];
// console.log(greatColor);

// domQuery('body').style.backgroundColor = greatColor;

let colorButton = domQuery('#colorButton');  //grabbing the button of the color
colorButton.addEventListener('click', makeColorsInScreen);


function makeColorsInScreen(){
    /**
     * this function is taking all the others 
     * to just call them once in the Event Listener
     */
    let colorChosen = randomColorPicker(colors);
    changeBackgroundColor(colorChosen);
    displayColorName(colorChosen, '#backgroundColor');
    displayColorCode(colorChosen, '#backgroundColorCode');
    displayColorMode(colorChosen, '#colorMode');
}

function changeBackgroundColor(colorObject){
    let luckyColorCode = colorObject.colorCode;  //color variable with the index chosen and the code of the color attribute
    console.log(luckyColorCode);
    return domQuery('body').style.backgroundColor = `${luckyColorCode}`;
}
function randomColorPicker(list){  
    /**this is the function where it takes 
     * the array or list and returns the 
     * value of the index randomly chosen */
    let randomIndex = getRandomInteger(0, colors.length);  //having the random index from the list
    let randomColorObject = list[randomIndex];
    console.log(randomIndex);
    return randomColorObject;
}

function getRandomInteger(min, max){
    // this function is to have an interger number between the max and min (from mozilla)
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
function displayColorName(colorObject, element){
    /**
     * this function is for the display of 
     * the color name in the screen
     */
    let luckyColorName = colorObject.colorName;
    console.log(luckyColorName);

    let aElement = domQuery(element);  //this is the a Element and down here the styles
    aElement.innerHTML = `${luckyColorName}`;
    aElement.style.fontSize = "1.5em";
    aElement.style.color = `yellowgreen`;
}

function displayColorCode(colorObject, element){
/**
     * this function is for the display of 
     * the color code in the screen
     */
    let luckyColorCode = colorObject.colorCode;
    console.log(luckyColorCode);

    let aElement = domQuery(element);  //this is the a Element and down here the styles
    aElement.innerHTML = `${luckyColorCode}`;
    aElement.style.fontSize = "1.5em";
    aElement.style.color = `orange`;

}

function displayColorMode(colorObject, element){
    let colorCode = colorObject.colorCode;
    let htmlRed = domQuery('#redMode');
    let htmlGreen = domQuery('#greenMode');
    let htmlBlue = domQuery('#blueMode');
    let colorMode = '';
    if (colorCode[1]=='f' && colorCode[2]=='f'){htmlRed.innerHTML = 'The color is in full red';
    }else{htmlRed.innerHTML = '';}    
    if (colorCode[3]=='f' && colorCode[4]=='f'){htmlGreen.innerHTML = 'The color is in full green';
    }else{htmlGreen.innerHTML = '';}    
    if (colorCode[5]=='f' && colorCode[6]=='f'){htmlBlue.innerHTML = 'The color is in full blue';
    }else{htmlBlue.innerHTML = '';}    
    // else {
    //     html.innerHTML = 'No full color components now';
    // }    
}

// let word = '#ff6700';

// if (word[1]=='f' && word[2]=='f'){
//     console.log('The red color is in full mode')
// }