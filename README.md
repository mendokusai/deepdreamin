#Deepdreamer

[Imgur](http://i.imgur.com/BNnwVAb.jpg)

This is a node app port of a [codementor](https://www.codementor.io/nodejs/tutorial/google-deep-dreaming-web-automation-chrome-dev-tools#/?utm_source=nodeweekly&utm_medium=email) article. 

##How to use
The best addition to the [tutorial](https://www.codementor.io/nodejs/tutorial/google-deep-dreaming-web-automation-chrome-dev-tools#/?utm_source=nodeweekly&utm_medium=email) I've made is the addition of a loop to continue to run images through the process and get weirder shit. To run your wacko images, drop your image *(ex. 'image.jpg')* into the project folder and then run the following command: ```node index.js 'image.jpg' '15'``` This instance would process `image.jpg` 15 times. **Note** that both image and the number of processes are entered as strings (with quotes). The loop is optional and will only run if a string of a number (sorry!) is there.

####Corrections
Most of this is quite straight forward, but there were a few variations added because `path.parse()` didn't want to work the way the tutorial suggests. Instead, this uses `path.basename(p, '.jpg')` to get to the base file name (which really doesn't effect the outcome.)

Most important difference from the tutorial is that the instructions say to check against `processing_status == 1` but *2* **worked.**

[Imgur](http://i.imgur.com/wYWRVnu.jpg)

`node index.js 'image.jpg' '5'`

[Imgur](http://i.imgur.com/6e33kNS.jpg)

`node index.js 'image.jpg' '100'`