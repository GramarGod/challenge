$( document ).ready(function() {
  getdata();
  smothscrool(500);
  challengebelt();
 
  createDetails();
  
});
var titleforall;
function smothscrool(duration)
{
  $('a[href^="#"').on('click',function(event){
    
      var target = $($(this).attr('href'));

      if(target.length)
      {
          event.preventDefault();
          $('html,body').animate({
            scrollTop: target.offset().top
          },duration);
       }
  });

}

function getdata()
{
    var x = document.getElementById("t-container");
    $.ajax({
      url: 'datasource.json',
      dataType: 'json',
      type: 'get',
      cache: true,
      success: function(data)
      {
        $(data.styles).each(function(index,value){
          
           var aunit = document.createElement("div");//thumb-unit
           var  divover = document.createElement("div");//thumb-overlay
           var strongName = document.createElement("strong");//name
         
           aunit.className = "thumb-unit";
           divover.className = "thumb-overlay";
           strongName.className = "edit";
           
            aunit.addEventListener("click",move);
           aunit.id= value.StyleID
           aunit.style.background = value.image;
           strongName.appendChild(document.createTextNode(value.Name));
           divover.appendChild(strongName);
           aunit.appendChild(divover);
           x.appendChild(aunit);
           console.log(x);
        });
        
      }
     });
}

function editdata(button)
{
  var x = document.getElementById("c-cont");

 
if (x.contentEditable == "true") {
    titleforall = x.innerHTML;
    //console.log(titleforall);
  $(x).css('background-color','');
    x.contentEditable = "false";
   
} else {
  x.innerHTML = "";
  $(x).css({
    'background-color':'rgb(0, 102, 153)',
    'opacity':'0.5'
          });
      x.contentEditable = "true";
  
}
}
function challengebelt()
{
  $('.return').click(function(){
    var x = document.getElementById("c-cont");
    console.log(titleforall);
    $('.product-title').text(titleforall);
    
    $('.chellenge-belt').css('left','0%');
   
  });
}

function move()
{
     
      var $this = $(this),
           newTitle = $this.find('strong').text();  
           background = $this.css('background-image');
          
      $('.chellenge-container').css('background-image',background);
      $('.product-title').text(newTitle);
     
      $('.chellenge-belt').css('left','-100%');
      $('')
}

function createDetails()
{
 
 
  
 
}

