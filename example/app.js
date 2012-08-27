
var NappTestFlight = require('dk.napp.testflight');

// Take off!
// key to see the results of these tests
NappTestFlight.takeOff("Your-Team-Token-Here");

// Create some simple controls to test things out.
var window = Ti.UI.createWindow({backgroundColor:'white'});

var view = Ti.UI.createView({layout: 'vertical'});

var buttonFactory = function(label) {
  return Ti.UI.createButton({
    top:10,
    height:40,
    width:200,
    title:label,
    color:'#fad'
  });
};

var button1 = buttonFactory("Pass checkpoint");
var button2 = buttonFactory("Test Exception");
var button3 = buttonFactory("Launch Feedback");

button1.addEventListener('click', function() { NappTestFlight.passCheckpoint("Test Checkpoint"); });
button2.addEventListener('click', function() { NappTestFlight.testException(); });
button3.addEventListener('click', function() { NappTestFlight.launchFeedback(); });

view.add(button1);
view.add(button2);
view.add(button3);

window.add(view);
window.open();

