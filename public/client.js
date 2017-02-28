var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'https://i.reddituploads.com/1ff9c413ef974565a5e0a2cc106f31b8?fit=max&h=1536&w=1536&s=75aed0f691e94e0031cc84b326a1d240') {
    myImage.setAttribute ('src','http://i.imgur.com/0kcD19O.png');
  } else {
    myImage.setAttribute ('src','https://i.reddituploads.com/1ff9c413ef974565a5e0a2cc106f31b8?fit=max&h=1536&w=1536&s=75aed0f691e94e0031cc84b326a1d240');
  }    
}

/* 
Here, you store a reference to your image element (in the index) in the myImage variable. 
Next, you make this variable's onclick event handler property equal to a function with no name (an "anonymous" function). 
Now, every time this image element is clicked, the function:
    retrieves the value of the image's src attribute;
    uses a conditional to check whether the src value is equal to the path to the original image:
        If it is, you change the src value to the path to the 2nd image, forcing the other image to be loaded inside the <image> element.
        If it isn't (meaning it must already have changed), the src value swaps back to the original image path, to the original state.
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textcontent = 'Welcome to the test page, ' + myName;
}

/*
This function contains a prompt() function, which brings up a dialog box, a bit like alert(). 
This prompt(), however, asks the user to enter some data, storing it in a variable after the user presses OK. 
In this case, we are asking the user to enter their name. 
Next, we call on an API called localStorage, which allows us to store data in the browser and later retrieve it. 
We use localStorage's setItem() function to create and store a data item called 'name', 
  setting its value to the myName variable which contains the data the user entered. 
Finally, we set the textContent of the heading to a string, plus the user's newly stored name.
*/

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to the test page, ' + storedName;
}

/*
This block first uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. 
If not, the setUserName() function is run to create it. 
If it exists (that is, the user set it during a previous visit), we retrieve the stored name using getItem() 
  and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().
*/

myButton.onclick = function() {
  setUserName();
}

/*
Now when you first visit the site, it will ask you for your username, then give you a personalized message. 
You can change the name any time you like by pressing the button. 
As an added bonus, because the name is stored inside localStorage, it persists after the site is closed down, 
  keeping the personalized message there when you next open the site!
*/