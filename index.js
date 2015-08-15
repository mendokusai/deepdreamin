var request = require('superagent'),
    path    = require('path'),
    fs      = require('fs');

var debug = function() {
  if (process.env.DEBUG) console.log.apply(null, arguments);
};

// params
var filter = 'art_deco';
var pwd = '/Users/portabledino/Sites/node/deepdreamer/';
var filename = pwd + process.argv[2];
var outputFilename = path.join(path.dirname(filename), path.basename(filename, '.jpg') + '-filtered-' + filter + path.extname(filename));
var url = 'https://dreamscopeapp.com/api/images';
var count = process.argv[3];



// make request
get_photo = function(){
  request
  .post(url)                 //this is a POST req
  .field('filter', filter)   // the 'filter' param
  .attach('image', filename) //attach file as 'image'
  .end(function(err, res) {  //callback on response
    if (err) return console.log(err);
    debug(res.headers);
    debug(res.body);

    // poll URL for complete processing
    var poll_url = url + '/' + res.body.uuid;
    var poll = function() {
      request.get(poll_url, function(err, res) {
        if (!err && res.statusCode == 200) {
          debug(res.headers);
          debug(res.body);
          var body = res.body;
          // check if process finished
          if (body.processing_status == 2 && body.filtered_url) {
            console.log('Ping!');
            console.log("poll_url: " + poll_url);
            console.log('Downloading image...');
            // download image and save to file
            request.get(body.filtered_url)
              .pipe(fs.createWriteStream(outputFilename))
              .on('finish', function() {
                console.log('Wrote ' + outputFilename);
              });
          } else {
            // still processing, check again
            process.stdout.write('.');
            setTimeout(poll, 1000);
          }
        } else {
          // log error
          console.log(err);
        }
      });
    };
    // Start polling
    process.stdout.write('Processing...');
    poll();
  });
};

// photo_loop = function(){
//   for(var i = 0; i < Number(process.argv[3]); i++) {
//     get_photo();
//     filename = outputFilename;
//   };
// };

// photo_loop();
get_photo();