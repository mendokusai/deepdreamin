#Deepdreamer

This is a node app port of a [codementor](https://www.codementor.io/nodejs/tutorial/google-deep-dreaming-web-automation-chrome-dev-tools#/?utm_source=nodeweekly&utm_medium=email) article. Most of this is quite straight forward, but there were a few variations added because `path.parse()` didn't want to work the way the tutorial suggests. Instead, this uses `path.basename(p, '.jpg')` to get to the base file name (which really doesn't effect the outcome.)
