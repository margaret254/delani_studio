$(document).ready(function()
{
$("#design").click(function(){
    $('.img1').slideToggle(3000);
    $(".p1").toggle();
});

$("#development").click(function()
{
    $(".p2, .img2").slideToggle(3000);
});

$("#productManagement").click(function()
{
    $(".p3, .img3").slideToggle(3000);
});

});

// portfolio items section
$('#hov').hover(function() {
    $(this).children(".overlay").fadeToggle(1000, "linear");
    $(this).toggle(css('.'))
    $(".text").toggle();
    $('.line').showToggle();

   
});
$('.line').hover(function() {
  $(this).animate({
    opacity: '1'
  });
},
function() {
  $(this).animate({
    opacity: '0'
  });
});

  $('.line').hover(function(){
  	$(this).animate({
  		opacity: '0'
  	})
  })

  $(document).ready(function(){
      $("form").submit(function(event){
          var name= $("#name").val();
            alert("Hello "  + name + ",Thanks for reaching to us. We have received your message.");
      });
  });
  

  