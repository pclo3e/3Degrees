
// =============== Maria: profile page =================

var basePrice = 100;
var selectedColour;
var selectedColourPrice;
var selectedStorage;
var selectedStoragePrice;
var selectedBedazzle;
var selectedBedazzlePrice ;
var totalPrice;

function updateTotal() {

	checkColour();
	checkStorage();
	checkBedazzle();

	var summaryStack = " Colour: " + selectedColour + " " + " $" + selectedColourPrice + " | ";
	summaryStack += " Storage: " + selectedStorage  + " " + " $" + selectedStoragePrice + " | "; 
	summaryStack += " Bedazzle: " + selectedBedazzle  + " " + " $" + selectedBedazzlePrice;
	document.getElementById("summary__stack").innerHTML = summaryStack;

	totalPrice = basePrice + selectedColourPrice + selectedStoragePrice + selectedBedazzlePrice;
	document.getElementById("summary__total--price").innerHTML = totalPrice;
}

updateTotal();

    function checkColour() {
        var colours = document.getElementsByName("radio__colour");
        for(var i = 0; i < colours.length; i++){
            if(colours[i].checked){
                selectedColour = colours[i].value;
            }
        }

        if(selectedColour == "White"){
            selectedColourPrice = 5;
        } else if(selectedColour == "Grey"){
            selectedColourPrice = 5;
        } else if(selectedColour == "Black"){
            selectedColourPrice = 5;
        }
    } 
        
    function checkStorage() {
        var storage = document.getElementsByName("radio__storage");
        for(var i = 0; i < storage.length; i++){
            if(storage[i].checked){
                selectedStorage = storage[i].value;
            }
        }

        if(selectedStorage == "250mb"){
            selectedStoragePrice = 15;
        } else if(selectedStorage == "500mb"){
            selectedColourPrice = 35;
        } 
    } 

    function checkBedazzle() {
        var bedazzle = document.getElementsByName("radio__bedazzle");
        for(var i = 0; i < bedazzle.length; i++){
            if(bedazzle[i].checked){
                selectedBedazzle = bedazzle[i].value;
            }
        }

        if(selectedBedazzle == "HelloKitty"){
            selectedBedazzlePrice = 180;
        } else if(selectedBedazzle == "Swarovski"){
            selectedBedazzlePrice = 200;
        } else if(selectedBedazzle == "Leopard"){
            selectedBedazzlePrice = 140;
        }
    } 
    
    
