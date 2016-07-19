
$(document).ready(function()
{

  function ajax(callback)
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
      //Si la requête est prête( readystate à 4) et la page est trouvée ( HTTP status à 200)
      if (xhttp.readyState == 4 && xhttp.status == 200)
      {
      //Conversion de l'objet JSON en chaine de caractère
      var parsed = JSON.parse(xhttp.responseText);
      //Affichage d'un élement du tableau,ici le 10ème.
      callback(parsed);
      }
    };  
    xhttp.open("GET", "data.php", true);
    xhttp.send();
  };

  function createElement(points)
  {
    console.log(points);
    document.getElementById("test").innerHTML = points[11]['nom'];
  };

  ajax(createElement);
});
