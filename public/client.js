
$(document).ready(function() {
getAllSongs();
function getAllSongs(){
$.ajax({
  type: "GET",
  url: "/songs",
  success: function(response){
    console.log("response", response);
  }
  error: function(error){

  }
});
}
$("#addSongButton").on("click", function(){
 var newSongTitle = $('#title').val();
 var newSongArtist = $('#artist').val();
  var newSongObject = {
    title: newSongTitle,
    artist: newSongArtist

  }

  $.ajax({
    type: 'POST',
    url: '/newSong',
    data: newSongObject,
    sucess: function(response){
      console.log(request);
    }
    error: function(error){

    }
  })
});

});
