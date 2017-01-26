var stopLoadSlide = false;
var justCount = 0;
/*$( document ).ready(function(){
  switch (localStorage.getItem("savePageForReal")) {
    case "home":
      $("#content").load("home.html", function(){
        stopLoadSlide=false;
        showSlide();
        justCount++;
      });
      break;
    case "info":
        stopLoadSlide = true;
        $("#content").load("info.html");
      break;
    case "showcase":
        stopLoadSlide = true;
        $("#content").load("showcase.html");
      break;
    default:
      console.log("HAVENT");
  }

  $(".MenuSection ul").addClass("animMenu");

});*/

$(window).bind("load", function()
{
  switch (localStorage.getItem("savePageForReal")) {
    case "home":
      $("#content").load("home.html", function(){
        stopLoadSlide=false;
        showSlide();
        justCount++;
      });
      break;
    case "info":
        stopLoadSlide = true;
        $("#content").load("info.html");
      break;
    case "showcase":
        stopLoadSlide = true;
        $("#content").load("showcase.html");
      break;
    default:
      console.log("HAVENT");
  }

  $(".MenuSection ul").addClass("animMenu");
});

$("#home").click(function(){
  stopLoadSlide = false;
  localStorage.setItem("savePageForReal", "home");
  $("#content").load("home.html", function()
  {
    console.log(localStorage.getItem("notReloadToHome"));
    if(justCount === 0 && stopLoadSlide === false)
    {
      showSlide();
      justCount++;
    }

  });
});

$("#info").click(function(){
  stopLoadSlide = true;
  localStorage.setItem("savePageForReal", "info");
  $("#content").load("info.html");

});

$("#showcase").click(function(){
  stopLoadSlide = true;
  localStorage.setItem("savePageForReal", "showcase");
  $("#content").load("showcase.html");

});


$(window).bind('load',function() {
  /* Act on the event */
});


var indexOfSlide = 0;
function showSlide()
{
    if(stopLoadSlide === false)
    {
      var i;

      var slides = document.getElementsByClassName("slide");
      var dots = document.getElementsByClassName("dots");

        for(i = 0; i < slides.length; i++)
        {
          slides[i].style.display = "none";
          if(i >= dots.length)
          {
            var div = document.createElement("div");
            div.className = "dots";
            div.setAttribute("id", "jTake");
            div.setAttribute("onclick", "selectSlide("+(i+1)+")");
            document.getElementById('foun').appendChild(div);
          }

        }


        for(i = 0; i < dots.length; i++)
        {
          dots[i].style.backgroundColor = "red";
        }

      indexOfSlide++;

        if(indexOfSlide > slides.length)
        {
          indexOfSlide = 1;
        }
      if(justCount == 0)
      {

      }
      slides[indexOfSlide-1].style.display = "block";
      dots[indexOfSlide-1].style.backgroundColor = "yellow";

    }

      setTimeout(showSlide, 1000);
}

function nextAndPrev(n)
{
  indexOfSlide += n;
  selectSlide(indexOfSlide);
}

function selectSlide(n)
{
  indexOfSlide = n;
  stopLoadSlide = true;
  if(stopLoadSlide === true)
  {
    var i;

    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dots");

    if(n > slides.length)
    {
      indexOfSlide = 1;
    }

    if(n < 1)
    {
      indexOfSlide = slides.length;
    }
      for(i = 0; i < slides.length; i++)
      {
        slides[i].style.display = "none";
      }
      for(i = 0; i < dots.length; i++)
      {
        dots[i].style.backgroundColor = "red";
      }



    slides[indexOfSlide-1].style.display = "block";
    dots[indexOfSlide-1].style.backgroundColor = "yellow";

  }
}
