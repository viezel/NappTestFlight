
var NappTestFlight = require('dk.napp.testflight');

// Take off!
// As of version SDK 1.2 takeOff must be called with the Application Token, 
// look here: https://testflightapp.com/dashboard/applications/, 
// choose your application, select SDK, get the Token for this Application.
NappTestFlight.takeOff("Your-App-Token-Here");

// Create some simple controls to test things out.
var window = Ti.UI.createWindow({backgroundColor:'white'});

var view = Ti.UI.createView({layout: 'vertical'});

var buttonFactory = function(label) {
  return Ti.UI.createButton({
    top:10,
    height:40,
    width:200,
    title:label,
    color:'#000'
  });
};

var button1 = buttonFactory("Pass checkpoint");
var button2 = buttonFactory("Test Exception");

button1.addEventListener('click', function() { NappTestFlight.passCheckpoint("Test Checkpoint"); });
button2.addEventListener('click', function() { NappTestFlight.testException(); });

view.add(button1);
view.add(button2);

window.add(view);
window.open();

