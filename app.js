var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('public'));  //"public" is a folder
app.use(bodyParser.urlencoded({extended: true}));
var songList = [
            {title: 'we did not start the phire',
              artist: 'billy joel'
            },
            {title: 'ring of fire',
              artist: 'johnny cash'
            }
          ];

app.get("/songs", function(req, res){ //does not need a . because it is not refering to a file
  res.send(songList);
  });

app.post("/newSong", function(req, res){
  var newSong = req.body;
  songList.push(newSong);
  console.log(songList);
  res.sendStatus(200);
  });

app.listen(3000);
