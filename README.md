# walk-like-a-caveman

Unga boonga!!

![Example](https://github.com/junior-devleague/walk-like-a-caveman/blob/master/caveman.gif)

## Objective

Use **JavaScript If Statements** and **KeyBoard Events** to change the source of one image to the next.

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures and attributes.
* Basic understanding of JavaScript and DOM (If Statements, Event Handling)

## Concepts

JS | Description
-----|------------
If Statement | A conditional statement that specifies what code needs to be run if a condition is true.
Keyboard Event | An object that describes the user's interaction with the keyboard.
Key Code | A number that represents an actual key on the keyboard.
image.src | A way to access the HTML attribute ```src``` on an image.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
3. Link all of your files correctly.
4. Make sure you also have all of the assets in this repository.

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create an ```img``` with an ```id``` of "image-container".
  * Set the ```src``` attribute on this image to the file path to the first caveman image (caveman0.png).

### Part III JS

To complete Part III, fulfill the following requirements:

1. Create a variable called imgSpace to hold your HTML Image. *Hint: Use document.getElementById('id')!**
2. Create a variable called lastPicture and set that equal to 5.
3. Create a variable called counter and set that equal to 0.
4. Add an Event Listener on the ```window``` that will listen for a ```keydown``` event. The function will take in the ```event``` as a parameter. In this function, do the following:
  * Create an if statement that checks if the ```keyCode``` from the ```event``` (keyCode is a property of the event object. How do we access a property from an object?) is equal to the key code for pressing the right arrow. Research what the key code for the right arrow is!
    * **In this if statement**, change the source of the image to the file path for the caveman image. Every time we press the right arrow, we want the image to change to the next image. **Use the counter variable to help you specify the source of the image. Remember, you can add Strings together to create a new file path! Look at how the image file is named - where could the counter variable go?**
    * Increment the counter variable by 1.
    * Create another if statement that will check if the ```counter``` variable is greater than the ```lastPicture``` variable. If so, set ```counter``` equal to 0.

## Stretch Goals

1. Make the caveman walk across the screen! *Hint: Use a variable called left to store a number for his starting distance away from the left side of the page. Increment this variable every time the right arrow is pressed. Apply this to the style of the image in JavaScript. Make sure that in your CSS file, you have the correct property that allows you to manipulate the object's location using the left property.*
