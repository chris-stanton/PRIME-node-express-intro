

var express = require("express"); //required for express module
var app = express();  //required for express module
var bodyParser = require("body-parser"); //not sure what 'body-parser' means or does?

app.use(express.static("public"));  //"public" is refer to a folder
app.use(bodyParser.urlencoded({extended: true})); //not sure what this line is doing

var songList = [
            {title: "we did not start the phire",
              artist: "billy joel"
            },
            {title: "ring of fire",
              artist: "johnny cash"
            }
          ];
// getting data
app.get("/songs", function(req, res){ // "/song" does not need a . because it is not refering to a file
  res.send(songList); //line sends the songList?
  });

//posting data
app.post("/newSong", function(req, res){
  var newSong = req.body;
//if else is telling the server what status code to send back
    if (newSong.artist !== "justin bieber") { //if else
      songList.push(newSong);// push onto the object
      res.sendStatus(200); //200 = in the clear
    } else {
      res.sendStatus(500); //500 = error
    }
});

//port thats listening for you to connect to
app.listen(3000);
