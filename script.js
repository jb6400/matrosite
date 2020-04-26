let contentGrid = document.getElementById('grid');
var twJSON = [
  {
    "img" : "Kasey0.png"
  },
  {
    "img" : "Kasey1.png"
  },
  {
    "img" : "Kasey2.png"
  },
  {
    "img" : "Kasey3.png"
  },
  {
    "img" : "Kasey4.png"
  },
  {
    "img" : "Kasey5.png"
  }
];

var i = 0;

function createElement(json){
  /// Create whole content item div and set class
  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add('content');

  /// Create HEADLINE h3, set class, set content
  let newContentTitle = document.createElement("H1");
  newContentTitle.classList.add('title');
  newContentTitle.innerHTML = "Kasey Golden's Teeny Weeny Challenge with Hatch!";
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newContentTitle);

  /// Create & add footer image
  let newImage = document.createElement("IMG");
  newImage.classList.add("image");
  // newImage.id = currID;
  newImage.src = json['img'];
  newContentElement.appendChild(newImage);

  /// Create HEADLINE h3, set class, set content
  let newSubheader = document.createElement("H3");
  newSubheader.classList.add('subheader');
  newSubheader.innerHTML = "^Click Me!^";
  /// Add the HEADLINE to the item
  newContentElement.appendChild(newSubheader);

  /// Add the item to the page
  contentGrid.appendChild(newContentElement);
}

var i = 0;
createElement(twJSON[i]);

$(document).ready(function(){
    $("img").click(function(){
        // Change src attribute of image
        i+=1;
        var f = 50/(i+1);
        var g = 25/(i+1);
        $(this).attr("src", "Kasey" + i + ".png");
        // console.log(f);
        $("h1").css("font-size", f + "pt");
        $("h3").css("font-size", g + "pt");
        if (i==6) {
          i=0;
          $("h1").css("font-size", "50pt");
          $("h3").css("font-size", "25pt");
          $(this).attr("src", "Kasey" + i + ".png");
        }
    });
});
