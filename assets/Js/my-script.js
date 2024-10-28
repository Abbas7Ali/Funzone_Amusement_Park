   $(document).ready(function (){
    setTimeout(function() {
      $('.loader-wrapper').fadeOut(1200);
    }, 800);
  });
   $('.addNote').click(function(){
    $('.estimate-shopping').fadeOut(300);
    $('.maintained-icons').hide(300)
    $('.coupon-shop').fadeOut(300);
      $('.add-note').fadeIn(1000);
   })

      $('.estimate').click(function(){
        $('.add-note').fadeOut(300);
        $('.coupon-shop').fadeOut(300);
        $('.maintained-icons').hide(300)
      $('.estimate-shopping').fadeIn(1000);
   })

         $('.coupon').click(function(){
          $('.estimate-shopping').fadeOut(300);
          $('.maintained-icons').hide(300)
          $('.add-note').fadeOut(300);
      $('.coupon-shop').fadeIn(1000);
   })

         $('.cancel-btn').click(function(){
          $(this).parent().parent().parent().fadeOut(300);
          $('.maintained-icons').show(300);
        })
          $('.shop-dismiss').click(function(){
           $(this).parent().parent().fadeOut(300);
           $('.empty').text('Your Cart is Empty.');
        })

          
var addToCart = $('.ticket-body button');
   var personNumber = document.getElementById('mini-quantity-person');
   var personNumber1 = document.getElementById('quantity-person1');
   var personNumber2 = document.getElementById('quantity-person2');
   var personNumber3 = document.getElementById('quantity-person3');
   var personValue = 1;
   var personValue1 = 1;
   var personValue2 = 1;
   var personValue3 = 1;
   var Total =document.getElementsByClassName("total").innerHTML;
   var subTotal =document.getElementsByClassName("sub-total").innerHTML;

   
 function countUp(){ 
    personNumber.value = ++personValue;
   };
    function countUp1(){ 
    personNumber1.value = ++personValue1;
   };
    function countUp2(){ 
    personNumber2.value = ++personValue2;
   };
    function countUp3(){ 
    personNumber3.value = ++personValue3;
   };

       function countDown() {
       personNumber.value = --personValue;
   };
          function countDown1() {
       personNumber1.value = --personValue3;
   };
          function countDown2() {
       personNumber2.value = --personValue2;
   };
          function countDown3() {
       personNumber3.value = --personValue3 ;
   };

  const openSearch = document.querySelector('.openSearch');
  const mySearch = document.querySelector('.searchHere');
  document.getElementById('openSearchs').onclick = function () {
    mySearch.focus();
  };


  document.getElementById('openSearchs').onclick = function () {
    document.getElementById('mySearch').focus();

  };

// ------------------------- Creating two functions to Open and Close Side Nav bar
function openNav() {
  document.getElementById("mySidenav").style.width = "320px";
  document.getElementById("mySidenav").style.left = 0;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.left = "-40%";
}


// ------------------------- Creating two functions to Open and Close Right Side Cart.
function openCart() {
  document.getElementById("tinyCart").style.width = "350px";
  document.getElementById("tinyCart").style.right = 0;
  
}

function closeCart() {
  document.getElementById("tinyCart").style.width = "0";
  document.getElementById("tinyCart").style.right = "-40%";

}

// ------------------------- Creating two function to open and close More info Container.
var infoButton = document.querySelector(".info-button");
var infoBttn = document.querySelector(".info-button").innerHTML;
var completeInfo = document.querySelector(".info");
infoButton.addEventListener('click', function(){
  completeInfo.classList.toggle("full-info");

  if (infoButton.innerHTML= "Hide") {
    infoButton.innerHTML= "Show/Hide";
  } else {
    infoButton.innerHTML= "View more";
  }
});
document.querySelector(".info-button").click();

// ------------------------- Creating A Function to create interactivity and DifferentTabs
function openPage(tabs,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabOne");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
  }
  document.getElementById(tabs).style.display = "flex";
  elmnt.style.color = color;
  var attractedAfter = document.getElementsByClassName("attracted", '::after');

  attractedAfter.this.style.display = "block";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("openDefault").click();
document.getElementById("openDefault").focus();
document.querySelector(".info-button").click();

