![TestFlight](https://s3.amazonaws.com/github-ds/TestFlight.png)

## NappTestFlight Module for Appcelerator Titanium 

This is a Test Flight module currently based on TestFlight SDK 1.2.4. 


### Download

**Find the newest version in the dist folder** 

### API

To access this module from JavaScript, you would do the following:

	<modules>
        <module platform="iphone">dk.napp.testflight</module> 
    </modules>

The provided API is simple:

	var NappTestFlight = require('dk.napp.testflight');
	
	NappTestFlight.takeOff("Your-Team-Token-Here"); //get token from Test Flight website
	NappTestFlight.passCheckpoint("create a checkpoint"); //make checkpoints in your code
	NappTestFlight.launchFeedback(); //get feedback from users
	
	NappTestFlight.log(); //log - will show up in testflight sessions
	

## Changelog

**v1.3.1**  
TestFlight SDK v1.2.5

**v1.3**  
TestFlight SDK v1.2.4

**v1.2**  
TestFlight SDK v1.1 - Support for iOS6 and iPhone5.

**v1.1**  
TFLog inplemented.

**v1.0**  
Initial implementation of of TestFlight. 


### Author

**Mads Møller**  
web: http://www.napp.dk  
email: mm@napp.dk  
twitter: nappdev  

### License

    Copyright (c) 2010-2013 Mads Møller

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.