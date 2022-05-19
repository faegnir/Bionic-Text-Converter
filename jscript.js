function myFunction() 
{
    z = document.getElementById("myInput").value;
   
    var x = z.replace(/\b..../g, function(m){ return m.bold(); });
    document.getElementById("aa").innerHTML = x;
}

 //onhover event?

  function outFunc() 
  {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Convert to Bionic";
  }



  function copythis(){
    var copyText = document.getElementById("aa");
    
    navigator.clipboard.writeText(copyText.innerHTML);

}
  