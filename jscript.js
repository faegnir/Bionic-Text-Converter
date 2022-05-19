function myFunction() 
{
    z = document.getElementById("myInput").value;
   
    var x = z.replace(/\b..../g, function(m){ return m.bold(); });
    document.getElementById("aa").innerHTML = x;
}

 //onhover event?
 /*$('.title-case').children().andSelf().each(function(){
  $(this).html( capitalize_first_letter( $(this).text() ) );
});*/

function capitalize_first_letter( str ) {    
 return str.replace(/\b[A-Z]/g,'<span class="first-letter">$&</span>');    
}​
  function outFunc() 
  {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Convert to Bionic";
  }



  function copythis(){
    var copyText = document.getElementById("aa");
    
    navigator.clipboard.writeText(copyText.innerHTML);

}
  