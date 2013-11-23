![TestFlight](https://s3.amazonaws.com/github-ds/TestFlight.png)

## NappTestFlight Module for Appcelerator Titanium 

This is a Test Flight module currently based on TestFlight SDK. This module supports iOS and Android. (The android version is still in beta.)


### Download

**Find the newest version in the dist folder** 


## Notice

Testflight does not know that you are using Appcelerator Titanium. So it will come up with a message saying that it cannot find your token. Thats okay. It will still work.

![Warning](https://pbs.twimg.com/media/BVEs_lFCQAAdywd.png)

To prevent getting this warning every time, set the tokens in your `tiapp.xml` like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ti:app xmlns:ti="http://ti.appcelerator.org">
    <property name="testflight.ios" type="string">9cad1045-56be-4176-ad4a-029c59d5f488</property>
    <property name="testflight.android" type="string">870aafec-bb4c-4777-91da-014c2d9ffd20</property>
</ti:app>
```

Then in your `app.js` do:

```javascript
require('dk.napp.testflight').takeOff(Ti.App.Properties.getString(Ti.Platform.name === 'iPhone OS' ? 'testflight.ios' : 'testflight.android'));
```

## Author

**Mads Møller**  
web: http://www.napp.dk  
email: mm@napp.dk  
twitter: nappdev  

## License

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
