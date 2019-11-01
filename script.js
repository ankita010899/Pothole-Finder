$(function(){
    $("#visible").click(function(){
      $("#invisible").toggleClass("show");
    });
  });

  $(function(){
    $("#visible1").click(function(){
      $("#invisible1").toggleClass("show");
    });
  });

  $(function(){
    $("#visible2").click(function(){
      $("#invisible2").toggleClass("show");
    });
  });

  function myFunction() {
    alert("You are not Logged In! Please LogIn to access this page.");
  }
  

var xmlhttp;
function loadXMLDoc(url,func)
{
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=func;
xmlhttp.open("GET",url,true);
xmlhttp.send();
}



function myFunction1()
{
loadXMLDoc('ajax_info.txt',function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    }
  });
}


