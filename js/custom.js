$('.filtering').slick({
  slidesToShow: 6,
  slidesToScroll: 2
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});






// Gallery
// 

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});








// Menu Js
(function($) {
$.fn.menumaker = function(options) {  
 var cssmenu = $(this), settings = $.extend({
   format: "dropdown",
   sticky: false
 }, options);
 return this.each(function() {
   $(this).find(".button").on('click', function(){
     $(this).toggleClass('menu-opened');
     var mainmenu = $(this).next('ul');
     if (mainmenu.hasClass('open')) { 
       mainmenu.slideToggle().removeClass('open');
     }
     else {
       mainmenu.slideToggle().addClass('open');
       if (settings.format === "dropdown") {
         mainmenu.find('ul').show();
       }
     }
   });
   cssmenu.find('li ul').parent().addClass('has-sub');
multiTg = function() {
     cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
     cssmenu.find('.submenu-button').on('click', function() {
       $(this).toggleClass('submenu-opened');
       if ($(this).siblings('ul').hasClass('open')) {
         $(this).siblings('ul').removeClass('open').slideToggle();
       }
       else {
         $(this).siblings('ul').addClass('open').slideToggle();
       }
     });
   };
   if (settings.format === 'multitoggle') multiTg();
   else cssmenu.addClass('dropdown');
   if (settings.sticky === true) cssmenu.css('position', 'fixed');
resizeFix = function() {
  var mediasize = 1000;
     if ($( window ).width() > mediasize) {
       cssmenu.find('ul').show();
     }
     if ($(window).width() <= mediasize) {
       cssmenu.find('ul').hide().removeClass('open');
     }
   };
   resizeFix();
   return $(window).on('resize', resizeFix);
 });
  };
})(jQuery);

(function($){
$(document).ready(function(){
$("#cssmenu").menumaker({
   format: "multitoggle"
});
});
})(jQuery);


// Login Form 


function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const passwordFieldType = passwordField.getAttribute("type");
  if (passwordFieldType === "password") {
      passwordField.setAttribute("type", "text");
  } else {
      passwordField.setAttribute("type", "password");
  }
}

// Add Active Class 

 // Get the current page's URL
 const currentUrl = window.location.href;

 // Get all links in the navigation
 const navLinks = document.querySelectorAll('nav ul li a');

 // Loop through each link
 navLinks.forEach(link => {
   // Check if the link's href matches the current URL
   if (link.href === currentUrl) {
     // Add the active class to the matching link
     link.classList.add('active');
   }
 });

//  add class on info 


// // Function to handle the click event for adding the class


function handleClick(event) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Get the parent li of the clicked a.info element
  var parentLi = $(this).closest('li');

  // Find the .offer-item__details-container within the clicked li
  var detailsContainer = parentLi.find('.offer-item__details-container');

  // Check if the element exists before adding the class
  if (detailsContainer.length) {
    detailsContainer.addClass('clicked'); // Add the class only to the selected li
  }
}

// Function to handle the click event for removing the class
function handleCloseClick(event) {
  // Prevent the default action of the click event
  event.preventDefault();

  // Get the parent li of the clicked .offer-item__close-button element
  var parentLi = $(this).closest('li');

  // Find the .offer-item__details-container within the clicked li
  var detailsContainer = parentLi.find('.offer-item__details-container');

  // Check if the element exists before removing the class
  if (detailsContainer.length) {
    detailsContainer.removeClass('clicked'); // Remove the class only from the selected li
  }
}

// Add the click event listener to all elements with the class a.info
$(document).ready(function() {
  $('a.info').on('click', handleClick);

  // Add the click event listener to the .offer-item__close-button to remove the class
  $('.offer-item__close-button').on('click', handleCloseClick);
});










