var NappTestFlight = require('dk.napp.testflight');

// Take off!
// look here: https://testflightapp.com/dashboard/applications/,
// choose your application, select SDK, get the Token for this Application.
NappTestFlight.takeOff("Your-App-Token-Here");


var win = Ti.UI.createWindow({
	backgroundColor : 'white'
});

var btn = Ti.UI.createButton({
	top: "20dp",
	height : "50dp",
	width : "300dp",
	title : "Pass checkpoint"
});

btn.addEventListener('click', function() {
	NappTestFlight.passCheckpoint("Test Checkpoint");
});

var btn2 = Ti.UI.createButton({
	top: "120dp",
	height : "50dp",
	width : "300dp",
	title : "Test Remote logging"
});

btn2.addEventListener('click', function() {
	NappTestFlight.log("Hello TestFlight");
});

win.add(btn);
win.add(btn2);
win.open();
