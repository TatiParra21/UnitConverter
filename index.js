const chosenUnit = document.getElementById("chosen-unit")
const convertButton = document.getElementById("convert-button")
const lengthCalc = document.getElementById("length-calc")
const volumeCalc = document.getElementById("volume-calc")
const massCalc = document.getElementById("mass-calc")


convertButton.addEventListener("click",function(){
    if(chosenUnit.value){
        convertLength(chosenUnit.value)
        convertVolume(chosenUnit.value)
        convertMass(chosenUnit.value)
    }
  
})

function convertLength(num){
let feetCalc = num * 3.281
let feetResult = feetCalc.toFixed(3)
let meterCalc = num / 3.281
let meterResult = meterCalc.toFixed(3)

lengthCalc.innerHTML = `${num} meters = ${feetResult} feet | ${num} feet = ${meterResult} meters`
}


function convertVolume(num){
    //okay we have for example 20 fucking liters, if one liter is 0.264 gallons, how many gallons are in
    //20 liters
    let literToGallonCalc = num * 0.264
    console.log(literToGallonCalc)
    let literToGallonResult = literToGallonCalc.toFixed(3)
    let gallonToLiterCalc = num * 3.785 // because 1 gallon is 3.785 liters
    let gallonToLiterResult = gallonToLiterCalc.toFixed(3)
    
    volumeCalc.innerHTML = `${num} liters = ${literToGallonResult} gallons | ${num} gallons = ${gallonToLiterResult} liters`
    }

    function convertMass(num){
        let kiloToPoundCalc = num * 2.204
        let kiloToPoundResult = kiloToPoundCalc.toFixed(3)
        let poundToKiloCalc = num / 2.204
        let poundToKiloResult = poundToKiloCalc.toFixed(3)
        
        massCalc.innerHTML = `${num} kilos = ${kiloToPoundResult} pounds | ${num} pounds = ${poundToKiloResult} kilos`
        }



