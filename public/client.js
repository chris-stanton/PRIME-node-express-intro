
$(document).ready(function() {

getAllSongs();

//not sure why we wrapped a function around the ajax? - guess because of the error function?
function getAllSongs(){
//GET actions
$.ajax({
  type: "GET",
  url: "/songs",
  success: function(response){

  }
  error: function(error){  //this logs when an error happens?
  }
});// end of ajax
}// end of getAllSongs()

//button click actions
$("#addSongButton").on("click", function(){
  var newSongTitle = $("#artist").val(); //input field
  var newSongArtist = $("#title").val(); //input field
  var newSongObject = {
    title: newSongTitle,
    artist: newSongArtist
    }

//Post actions
  $.ajax({
    type: "POST", //posting request to the web page
    url: "/newSong", //add after http://localhost:3000
    data: newSongObject, //why does this not need to be in quotes
    sucess: function(response){ //function is asking for the response
      //console.log(request);
    }
    error: function(error){ //this logs when an error happens?
    }
  })//end of ajax post
});//end of button click

}); //end of document.ready
