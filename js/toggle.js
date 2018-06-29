$("#flip").on("click", function() {
  $("#panel").slideToggle("slow")  
  });

$("#flip").on("click", function() {
  $("#flip").fadeOut(function (){
    $("#flip").text(($("#flip").text() == "Open") ? "Close" : "Open").fadeIn();
  })
})
   
  
