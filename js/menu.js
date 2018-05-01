// This sidebar menu example from https://bootsnipp.com/snippets/featured/fancy-sidebar-navigation
jQuery(document).ready(function () {
   console.log("in document ready for menu");
   // bm hack to make the example work in WordPress
   // deleting the parent div added by WordPress for the sidebar
   jQuery("#sidebar-wrapper ul").addClass("sidebar-nav").addClass("nav");
   var navCol = jQuery("#sidebar-wrapper ul.sidebar-nav");
   console.log(navCol);
   jQuery("#sidebar-wrapper .nav-menu").remove();
   jQuery("#sidebar-wrapper").append(navCol);
   // end of bm hack
   
  var trigger = jQuery('.hamburger'),
      overlay = jQuery('.overlay'),
     isClosed = false;

    trigger.click(function () {
      console.log("click");
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  jQuery('[data-toggle="offcanvas"]').click(function () {
        jQuery('#wrapper').toggleClass('toggled');
  });  

});