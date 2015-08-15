#Deepdreamer

This is a node app port of a [codementor](https://www.codementor.io/nodejs/tutorial/google-deep-dreaming-web-automation-chrome-dev-tools#/?utm_source=nodeweekly&utm_medium=email) article. 

####Corrections
Most of this is quite straight forward, but there were a few variations added because `path.parse()` didn't want to work the way the tutorial suggests. Instead, this uses `path.basename(p, '.jpg')` to get to the base file name (which really doesn't effect the outcome.)

Most important difference from the tutorial is that the instructions say to check against `processing_status == 1` but *2* **worked.**

####TODO
**Improvements:** while it's neat and all to do this once at a time, build **a loop** to run through multiple rounds.